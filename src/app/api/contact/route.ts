import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, phone, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Numancia Digital <contacto@numancia.digital>',
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
        return NextResponse.json({ error }, { status: 500 });
    }
}
