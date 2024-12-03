// app/api/submit-form/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


async function sendEmailToAdmin(userEmail: string, content: string) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
      from: userEmail,  // This will be the user's email (from the form)
      to: 'bankfor49@gmail.com',  // Replace with the admin's email
      subject: 'New Form Submission',
      text: content  // The form content to send in the email
    };
  
    await transporter.sendMail(mailOptions);
  }

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, topic, additionalInformation } = await req.json();

    if (!firstName || !lastName || !email || !topic || !additionalInformation) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Get user email from session (NextAuth or similar)
    const userEmail = email;  // This should come from your session

    // Prepare the email content
    const emailContent = `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Topic: ${topic}
      Additional Information: ${additionalInformation}
    `;

    // Send email to admin
    await sendEmailToAdmin(userEmail, emailContent);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ message: 'Failed to submit form', error: error.message }, { status: 500 });
  }
}
