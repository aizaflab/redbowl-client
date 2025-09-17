import { createTransport } from "@/lib/mailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { ok: false, error: "Name, email, subject, and message are required" },
        { status: 400 }
      );
    }
    
    const transporter = createTransport();

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Contact Form: ${subject} - from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject}
        Message: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
      `,
    });
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Thank you for contacting Red Bowl!",
      text: `Hi ${name},\n\nWe have received your message and will get back to you shortly.\n\nThank you!\nRed Bowl Team`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Red Bowl! We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
        <p>— Red Bowl Team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
