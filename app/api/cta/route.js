import { createTransport } from "@/lib/mailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const {email} = await req.json();
    if (!email) {
      return NextResponse.json({ ok: false, error: "All fields required" }, { status: 400 });
    }
    const transporter = createTransport();

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `📩 New Newsletter Subscription`,
      replyTo: email,
      text: `
        Email: ${email}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
