import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const data = await request.json();

    await resend.emails.send({
      from: "Arte & Yeso <manuel221101@hotmail.com>",
      to: ["suemail@gmail.com"],
      subject: "Nuevo mensaje desde la web",
      html: `
        <h3>Nuevo contacto</h3>
        <p><strong>Nombre:</strong> ${data.nombre} ${data.apellido}</p>
        <p><strong>Email:</strong> ${data.correo}</p>
        <p><strong>Teléfono:</strong> ${data.telefono || "No especificado"}</p>
        <p><strong>Mensaje:</strong><br/>${data.mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
