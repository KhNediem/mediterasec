import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, message } = body;

    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the SMTP transporter
    // Note: These need to be set in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'no-reply@mediterasec.com', 
      to: process.env.CONTACT_EMAIL || 'contact@mediterasec.com', 
      replyTo: email,
      subject: `New Website Inquiry from ${firstName} ${lastName}`,
      text: `
        New Contact Request from MediteraSec Website
        
        Name: ${firstName} ${lastName}
        Company: ${company || 'N/A'}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #111;">
          <h2 style="color: #124170;">New Contact Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
