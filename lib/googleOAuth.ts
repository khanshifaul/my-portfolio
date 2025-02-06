// lib/googleOAuth.ts

import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI // e.g. 'http://localhost:3000/api/auth/google/callback'
);

export const getAuthUrl = () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
  });

  return authUrl;
};

export const getAccessToken = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);

  oAuth2Client.setCredentials(tokens);

  return tokens;
};

export const sendEmail = async (to: string, subject: string, text: string) => {
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const email = [
    `From: "Your Name" <your-email@gmail.com>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    "",
    text,
  ].join("\n");

  const base64Email = Buffer.from(email).toString("base64").replace(/=/g, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: base64Email,
    },
  });
};
