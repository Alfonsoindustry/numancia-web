import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
    if (!resend) {
        console.error("RESEND_API_KEY is not defined in environment variables");
        return NextResponse.json({ error: "Configuración del servidor incompleta" }, { status: 500 });
    }

    try {
        const { name, phone, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Numancia Digital <hola@numanciadigital.es>',
            to: ['buzon@numanciadigital.es'],
            subject: `Nueva Consulta: ${subject} - ${name}`,
            html: `
        <h2>Nuevo mensaje desde la web Numancia Digital</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
