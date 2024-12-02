// sendEmail.ts
import nodemailer from 'nodemailer';

export async function sendVerificationEmail(email: string, token: string) {
    console.log('Starting sendVerificationEmail function');

    // Set up the nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

   

    // Use the provided token to create the verification URL
    const verificationUrl = `${process.env.FRONTEND_URL}/verify?token=${token}`;
    console.log('Verification URL:', verificationUrl);

    // Mail options
    const mailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: email,
        subject: 'Account Verification',
        text: `Please verify your account by clicking this link: ${verificationUrl}`,
        html: `<p>Please verify your account by clicking this link: <a href="${verificationUrl}">${verificationUrl}</a></p>`,
    };

    // Attempt to send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Verification email sent to ${email}`);
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Could not send verification email');
    }
}
