import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, message } = body;

    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Supabase
    try {
      const supabase = await createClient();
      const { error: dbError } = await supabase
        .from('contact_inquiries')
        .insert([
          { 
            first_name: firstName, 
            last_name: lastName, 
            company: company || null, 
            email, 
            message,
            status: 'new'
          }
        ]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        // We continue even if DB fails, so the email is still attempted
      }
    } catch (dbEx) {
      console.error('Database exception:', dbEx);
    }

    // 2. Send Email Notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'no-reply@mediterasec.com', 
      to: 'mediterasec@gmail.com', 
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

    return NextResponse.json({ message: 'Inquiry received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
