// lib/mail.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

// Base email sending function to handle reusable configurations
const sendEmail = async ({
  to,
  subject,
  html,
  from = "no-reply@yourapp.com",
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) => {
  try {
    await resend.emails.send({
      from,
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to} with subject: "${subject}"`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

// Function to send a two-factor authentication token
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const subject = "Your 2FA Code";
  const html = `<p>Your 2FA code is: <strong>${token}</strong></p>`;

  await sendEmail({ to: email, subject, html });
};

// Function to send a password reset email with a reset link
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const subject = "Reset Your Password";
  const html = `<p>To reset your password, please click <a href="${resetLink}">here</a>.</p>`;

  await sendEmail({ to: email, subject, html });
};

// Function to send an email verification link
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/verify-email?token=${token}`;
  const subject = "Verify Your Email Address";
  const html = `<p>Please confirm your email by clicking <a href="${confirmLink}">here</a>.</p>`;

  await sendEmail({ to: email, subject, html });
};

// Function to send a generic notification email
export const sendNotificationEmail = async (
  email: string,
  subject: string,
  message: string
) => {
  const html = `<p>${message}</p>`;

  await sendEmail({ to: email, subject, html });
};
