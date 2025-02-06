// auth/config/providers.config.ts

import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { getUserByEmail } from "@/data/user";
import { loginSchema } from "@/schema/auth-schema";

const providers = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
  Github({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
  Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
  Credentials({
    async authorize(credentials) {
      const validatedFields = loginSchema.safeParse(credentials);

      if (validatedFields.success) {
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);

        if (!user || !user.password) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password);

        return passwordsMatch ? user : null;
      }

      return null;
    },
  }),
];

export default providers;
