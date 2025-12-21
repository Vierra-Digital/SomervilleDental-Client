import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, insuranceCarrier, insuranceId, appointmentRequest } = body

    // Escape HTML to prevent XSS
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeInsuranceCarrier = escapeHtml(insuranceCarrier)
    const safeInsuranceId = escapeHtml(insuranceId)
    const safeAppointmentRequest = escapeHtml(appointmentRequest).replace(/\n/g, '<br>')

    // Validate required fields
    if (!name || !email || !phone || !insuranceCarrier || !insuranceId || !appointmentRequest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email template matching website theme (dark blue)
    const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #f3f4f6;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                <span style="font-weight: bold;">Somerville</span> <span style="font-weight: normal;">Dental</span>
              </h1>
              <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 16px;">Quality Dental Care</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 24px; font-weight: bold;">Appointment Request Received</h2>
              
              <p style="margin: 0 0 20px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                Dear ${safeName},
              </p>
              
              <p style="margin: 0 0 20px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                Thank you for your appointment request with Somerville Dental Associates. We have received your information and our office will get back to you shortly to schedule your appointment time.
              </p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #1e40af; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Your Appointment Request Details:</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px; width: 150px;"><strong>Name:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;"><strong>Email:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;"><strong>Phone:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;"><strong>Insurance:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px;">${safeInsuranceCarrier}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;"><strong>Insurance ID:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px;">${safeInsuranceId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px; vertical-align: top;"><strong>Request:</strong></td>
                    <td style="padding: 5px 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${safeAppointmentRequest}</td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 20px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                Our team will review your request and contact you within 24-48 hours to confirm your appointment time. If you have any questions or need to make changes to your request, please don't hesitate to contact us.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px; font-weight: bold;">Contact Information:</p>
                <p style="margin: 5px 0; color: #64748b; font-size: 14px;">
                  <strong>Phone:</strong> (+1) (781)-(874)-(1630)
                </p>
                <p style="margin: 5px 0; color: #64748b; font-size: 14px;">
                  <strong>Email:</strong> somervilledental@verizon.net
                </p>
                <p style="margin: 5px 0; color: #64748b; font-size: 14px;">
                  <strong>Address:</strong> 3 Ashland Street, Medford, MA 02155
                </p>
              </div>
              
              <p style="margin: 20px 0 0 0; color: #475569; font-size: 16px; line-height: 1.6;">
                We look forward to seeing you soon!
              </p>
              
              <p style="margin: 30px 0 0 0; color: #475569; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1e293b;">Somerville Dental Associates</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 14px;">
                © Somerville Dental Associates, All rights reserved
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                3 Ashland Street, Medford, MA 02155
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    const textVersion = `
Dear ${safeName},

Thank you for your appointment request with Somerville Dental Associates. We have received your information and our office will get back to you shortly to schedule your appointment time.

Your Appointment Request Details:
- Name: ${safeName}
- Email: ${safeEmail}
- Phone: ${safePhone}
- Insurance: ${safeInsuranceCarrier}
- Insurance ID: ${safeInsuranceId}
- Request: ${appointmentRequest}

Our team will review your request and contact you within 24-48 hours to confirm your appointment time.

Contact Information:
Phone: (+1) (781)-(874)-(1630)
Email: somervilledental@verizon.net
Address: 3 Ashland Street, Medford, MA 02155

We look forward to seeing you soon!

Best regards,
Somerville Dental Associates
    `

    // Send email to user (confirmation email)
    await transporter.sendMail({
      from: `"${process.env.FROM_NAME || 'Somerville Dental Associates'}" <${process.env.FROM_EMAIL || 'business@alexshick.com'}>`,
      to: email,
      subject: 'Appointment Request Confirmation - Somerville Dental Associates',
      text: textVersion,
      html: emailHTML,
    })

    // Also send notification to business email
    if (process.env.BUSINESS_EMAIL) {
      const businessEmailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #f3f4f6;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                <span style="font-weight: bold;">Somerville</span> <span style="font-weight: normal;">Dental</span>
              </h1>
              <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 16px;">New Appointment Request</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 24px; font-weight: bold;">New Appointment Request Received</h2>
              
              <p style="margin: 0 0 30px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                A new appointment request has been submitted through the website. Please review the details below and contact the patient to schedule their appointment.
              </p>
              
              <div style="background-color: #f8fafc; border: 2px solid #1e40af; padding: 25px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0 0 20px 0; color: #1e293b; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Patient Information:</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;"><strong>Full Name:</strong></td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;"><strong>Email Address:</strong></td>
                    <td style="padding: 8px 0; color: #1e40af; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #1e40af; text-decoration: none;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;"><strong>Phone Number:</strong></td>
                    <td style="padding: 8px 0; color: #1e40af; font-size: 15px;"><a href="tel:${safePhone.replace(/\D/g, '')}" style="color: #1e40af; text-decoration: none;">${safePhone}</a></td>
                  </tr>
                </table>
                
                <p style="margin: 20px 0 10px 0; color: #1e293b; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Insurance Information:</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;"><strong>Insurance Carrier:</strong></td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${safeInsuranceCarrier}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;"><strong>Insurance ID Number:</strong></td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${safeInsuranceId}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #92400e; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Appointment Request:</p>
                <p style="margin: 0; color: #78350f; font-size: 15px; line-height: 1.6;">${safeAppointmentRequest}</p>
              </div>
              
              <div style="background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0 0 15px 0; color: #1e40af; font-size: 14px; font-weight: bold;">Quick Actions:</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 5px 0;">
                      <a href="mailto:${safeEmail}?subject=Re: Appointment Request - Somerville Dental Associates" style="display: inline-block; background-color: #1e40af; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; margin-right: 10px;">Reply to Patient</a>
                    </td>
                    <td style="padding: 5px 0;">
                      <a href="tel:${safePhone.replace(/\D/g, '')}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600;">Call Patient</a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 30px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                <strong>Note:</strong> A confirmation email has been automatically sent to the patient. Please contact them within 24-48 hours to schedule their appointment.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 14px;">
                © Somerville Dental Associates, All rights reserved
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                3 Ashland Street, Medford, MA 02155
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `

      const businessTextVersion = `
New Appointment Request Received

A new appointment request has been submitted through the website. Please review the details below and contact the patient to schedule their appointment.

Patient Information:
- Full Name: ${safeName}
- Email: ${safeEmail}
- Phone: ${safePhone}

Insurance Information:
- Insurance Carrier: ${safeInsuranceCarrier}
- Insurance ID Number: ${safeInsuranceId}

Appointment Request:
${appointmentRequest}

Quick Actions:
- Reply to Patient: ${safeEmail}
- Call Patient: ${safePhone}

Note: A confirmation email has been automatically sent to the patient. Please contact them within 24-48 hours to schedule their appointment.
      `

      // Send notification email to business
      await transporter.sendMail({
        from: `"${process.env.FROM_NAME || 'Somerville Dental Associates'}" <${process.env.FROM_EMAIL || 'business@alexshick.com'}>`,
        to: process.env.BUSINESS_EMAIL || 'somervilledental@verizon.net',
        subject: `New Appointment Request from ${safeName} - ${safePhone}`,
        text: businessTextVersion,
        html: businessEmailHTML,
      })
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}

