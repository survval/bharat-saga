'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_SENDER || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_RECEIVER || 'bharath-saga@guvvala.xyz',
      subject: `New Message from ${name} via Bharath Saga`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; rounded: 8px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f5; border-radius: 4px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #71717a;">
            This email was sent from the contact form on Bharath Saga.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Email action error:', err);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
