import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME || 'Abdur Rehman';

function createTransporter() {
  if (!SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export interface EmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Sends a clean, anti-spam Thank You confirmation email directly to the sender.
 */
export async function sendThankYouEmail({ name, email, subject, message }: EmailPayload): Promise<boolean> {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      console.warn('⚠️ [Email] SMTP credentials not fully configured in .env. Skipping automated email.');
      return false;
    }

    const cleanSubject = subject ? subject.trim() : 'Project Inquiry';
    const emailSubject = `Re: Your message to Abdur Rehman (${cleanSubject})`;

    // Plain text version (Essential for high deliverability)
    const textContent = `Hi ${name},

Thank you for reaching out to me through my portfolio (portfolio-abdur-rehman.vercel.app).

I have received your message regarding "${cleanSubject}":
"${message}"

I am currently reviewing your inquiry and will get back to you shortly (usually within 24 hours).

In the meantime, feel free to connect with me:
- Portfolio: https://portfolio-abdur-rehman.vercel.app
- LinkedIn: https://www.linkedin.com/in/abdul-rehman-solution-engineer/
- GitHub: https://github.com/abdulrehman4702

Best regards,
Abdur Rehman
Full Stack Developer & AI Solutions Engineer
Email: ${SMTP_USER}`;

    // Clean, modern HTML body
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <div style="max-width: 580px; margin: 24px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    
    <!-- Top Header -->
    <div style="background-color: #0f172a; padding: 28px 24px; border-bottom: 3px solid #f97316;">
      <table role="presentation" width="100%">
        <tr>
          <td>
            <div style="display: inline-block; background: #f97316; color: #ffffff; font-weight: bold; font-size: 13px; width: 32px; height: 32px; line-height: 32px; text-align: center; border-radius: 8px; margin-bottom: 8px;">
              AR
            </div>
            <h1 style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0;">
              Thank You for Reaching Out
            </h1>
            <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0 0;">
              Abdur Rehman · Full Stack Developer &amp; AI Engineer
            </p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Content -->
    <div style="padding: 28px 24px;">
      <p style="font-size: 15px; font-weight: 600; color: #0f172a; margin: 0 0 12px 0;">
        Hi ${name},
      </p>
      <p style="font-size: 14px; line-height: 1.6; color: #334155; margin: 0 0 16px 0;">
        Thank you for getting in touch. I have received your message regarding <strong>${cleanSubject}</strong> and will get back to you shortly (usually within 24 hours).
      </p>

      <!-- Message summary -->
      <div style="background-color: #f1f5f9; border-left: 4px solid #f97316; padding: 14px 16px; border-radius: 6px; margin: 18px 0;">
        <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin: 0 0 6px 0;">
          Your Inquiry:
        </p>
        <p style="font-size: 13px; color: #1e293b; line-height: 1.5; margin: 0; font-style: italic; white-space: pre-wrap;">
          &ldquo;${message}&rdquo;
        </p>
      </div>

      <!-- Links -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 18px; margin-top: 20px; font-size: 13px;">
        <p style="font-size: 12px; color: #64748b; margin: 0 0 8px 0;">
          Feel free to explore my profiles:
        </p>
        <a href="https://portfolio-abdur-rehman.vercel.app" style="color: #ea580c; font-weight: 600; text-decoration: none; margin-right: 14px;">🌐 Website</a>
        <a href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/" style="color: #0284c7; font-weight: 600; text-decoration: none; margin-right: 14px;">💼 LinkedIn</a>
        <a href="https://github.com/abdulrehman4702" style="color: #0f172a; font-weight: 600; text-decoration: none;">💻 GitHub</a>
      </div>

      <!-- Sign off -->
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
        <p style="font-size: 14px; color: #334155; margin: 0;">
          Warm regards,<br>
          <strong style="color: #0f172a;">Abdur Rehman</strong><br>
          <span style="font-size: 12px; color: #64748b;">Full Stack Developer &amp; AI Solutions Engineer</span>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 14px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
      Sent directly from Abdur Rehman's Portfolio (<a href="https://portfolio-abdur-rehman.vercel.app" style="color: #64748b; text-decoration: none;">portfolio-abdur-rehman.vercel.app</a>)
    </div>

  </div>
</body>
</html>
    `;

    const timestamp = Date.now();

    await transporter.sendMail({
      from: `"${SMTP_FROM_NAME}" <${SMTP_USER}>`,
      replyTo: `"${SMTP_FROM_NAME}" <${SMTP_USER}>`,
      to: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      headers: {
        'Auto-Submitted': 'auto-replied',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'Message-ID': `<inquiry-${timestamp}@portfolio-abdur-rehman.vercel.app>`,
      },
    });

    console.log(`✅ [Email] Thank-you confirmation email delivered to: ${email}`);
    return true;
  } catch (error) {
    console.error('❌ [Email Error] Failed to send thank you email:', error);
    return false;
  }
}
