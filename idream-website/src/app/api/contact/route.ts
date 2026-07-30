import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "arun.more@vselindia.com";

    // Modern Professional HTML Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
            .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
            .header { background: linear-gradient(90deg, #06257e 0%, #bd1e1e 100%); color: #ffffff; padding: 24px 30px; }
            .header h2 { margin: 0; font-size: 22px; font-weight: 600; }
            .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
            .content { padding: 30px; color: #334155; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
            .info-table td.label { font-weight: 600; color: #64748b; width: 30%; }
            .info-table td.value { color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #bd1e1e; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-line; }
            .footer { background: #f8fafc; padding: 16px 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Website Inquiry</h2>
              <p>IDream Film Infrastructure Contact Form</p>
            </div>
            <div class="content">
              <table class="info-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color: #06257e; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value">${phone || "Not Provided"}</td>
                </tr>
                <tr>
                  <td class="label">Subject</td>
                  <td class="value">${subject}</td>
                </tr>
              </table>

              <div style="font-weight: 600; color: #64748b; margin-bottom: 8px; font-size: 14px;">Message Details:</div>
              <div class="message-box">${message}</div>
            </div>
            <div class="footer">
              This message was sent directly from the IDream Website Contact Form.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"IDream Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `[Website Inquiry] ${subject}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}