import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, organization, location, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject) {
            return Response.json(
                { error: 'Name, email, and subject are required.' },
                { status: 400 }
            );
        }

        // Create Gmail SMTP transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email to YOU (the business owner) — client inquiry notification
        const mailToOwner = {
            from: `"Omni Solutions Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Inquiry: ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e17; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
                    <div style="background: linear-gradient(135deg, #10b981, #0ea5c7); padding: 30px 40px;">
                        <h1 style="margin: 0; font-size: 24px; color: #fff;">📩 New Contact Inquiry</h1>
                        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Received from Omni Solutions Website</p>
                    </div>
                    <div style="padding: 30px 40px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 140px; vertical-align: top;">Full Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f8fafc; font-weight: 500;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; vertical-align: top;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; vertical-align: top;">Phone</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f8fafc;">${phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; vertical-align: top;">Organization</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f8fafc;">${organization || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; vertical-align: top;">Location</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f8fafc;">${location || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; vertical-align: top;">Subject</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f8fafc; font-weight: 600;">${subject}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px; padding: 20px; background: #111827; border-radius: 12px; border: 1px solid #1e293b;">
                            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                            <p style="margin: 0; color: #f8fafc; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided'}</p>
                        </div>
                        <p style="margin-top: 24px; color: #475569; font-size: 12px; text-align: center;">You can reply directly to this email to respond to the client.</p>
                    </div>
                </div>
            `,
        };

        // Confirmation email to the CLIENT
        const mailToClient = {
            from: `"Omni Solutions" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Thank you for contacting Omni Solutions — ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
                    <div style="background: linear-gradient(135deg, #10b981, #0ea5c7); padding: 30px 40px;">
                        <h1 style="margin: 0; font-size: 24px; color: #fff;">Thank You, ${name}! 🙌</h1>
                        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">We've received your inquiry</p>
                    </div>
                    <div style="padding: 30px 40px;">
                        <p style="color: #334155; line-height: 1.7; font-size: 15px;">
                            Thank you for reaching out to <strong>Omni Solutions</strong>. We have received your message regarding <strong>"${subject}"</strong> and our team will review it carefully.
                        </p>
                        <p style="color: #334155; line-height: 1.7; font-size: 15px;">
                            We typically respond within <strong>24 hours</strong> during business days. If your matter is urgent, feel free to call us directly.
                        </p>
                        <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 4px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your Message Summary</p>
                            <p style="margin: 0; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided'}</p>
                        </div>
                        <p style="color: #64748b; font-size: 13px; text-align: center; margin-top: 24px;">
                            — The Omni Solutions Team<br/>
                            📧 info@omnisolutions.com &nbsp;|&nbsp; 📞 +91 98765 43210
                        </p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(mailToOwner);
        await transporter.sendMail(mailToClient);

        return Response.json(
            { success: true, message: 'Your message has been sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return Response.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
