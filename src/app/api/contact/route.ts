import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// ── Rate limiting en memoria (5 envíos por IP cada hora) ──
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimit.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count++;
    return true;
}

// ── Escape HTML para prevenir XSS en el cuerpo del email ──
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ── Servicios permitidos (lista blanca) ──
const SERVICIOS_VALIDOS = [
    'Diseño Web',
    'Tienda Online (E-commerce)',
    'SEO Local',
    'Gestión de Redes Sociales',
    'Google My Business',
    'Auditoría Digital Gratuita',
    'Otros / Consulta general',
];

export async function POST(req: Request) {
    if (!resend) {
        console.error("RESEND_API_KEY is not defined in environment variables");
        return NextResponse.json({ error: "Configuración del servidor incompleta" }, { status: 500 });
    }

    // ── Rate limiting ──
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    if (!checkRateLimit(ip)) {
        return NextResponse.json({ error: "Demasiados intentos. Inténtalo más tarde." }, { status: 429 });
    }

    try {
        const body = await req.json();
        const { name, email, phone, subject, message, website } = body;

        // ── Honeypot: los bots rellenan este campo, los humanos no ──
        if (website) {
            return NextResponse.json({ data: 'ok' }); // Silencioso para no delatar
        }

        // ── Validación de campos ──
        if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
            return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
        }
        if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return NextResponse.json({ error: "Email inválido" }, { status: 400 });
        }
        if (typeof phone !== 'string' || !/^[+\d\s\-().]{7,20}$/.test(phone.trim())) {
            return NextResponse.json({ error: "Teléfono inválido" }, { status: 400 });
        }
        if (typeof subject !== 'string' || !SERVICIOS_VALIDOS.includes(subject)) {
            return NextResponse.json({ error: "Servicio no válido" }, { status: 400 });
        }
        if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 5000) {
            return NextResponse.json({ error: "Mensaje inválido (10-5000 caracteres)" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Numancia Digital <hola@numanciadigital.es>',
            to: ['buzon@numanciadigital.es'],
            replyTo: email.trim(),
            subject: `Nueva Consulta: ${escapeHtml(subject)} - ${escapeHtml(name)}`,
            html: `
        <h2>Nuevo mensaje desde la web Numancia Digital</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone.trim())}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch {
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
