// auth/config/auth.callbacks.ts

import { Role } from "@prisma/client";

import { getAccountByUserId } from "@/data/account";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

const authCallbacks = {
  async signIn({ user, account }) {
    if (account?.provider !== "credentials") return true;
    const existingUser = await getUserById(user.id as string);

    if (!existingUser?.emailVerified) return false;
    if (existingUser.isTwoFactorEnabled) {
      const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (!twoFactorConfirmation) return false;
      await db.twoFactorConfirmation.delete({
        where: { id: twoFactorConfirmation.id },
      });
    }

    return true;
  },
  async session({ token, session }) {
    if (token.sub && session.user) {
      session.user.id = token.sub;
    }
    if (token.role && session.user) {
      session.user.role = token.role as Role;
    }
    if (session.user) {
      session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      session.user.isOAuth = token.isOAuth as boolean;
      session.user.name = token.name;
      session.user.email = token.email as string;
    }

    return session;
  },
  async jwt({ token }) {
    if (!token.sub) return token;
    const existingUser = await getUserById(token.sub);

    if (!existingUser) return token;
    const existingAccount = await getAccountByUserId(existingUser.id);

    token.isOAuth = !!existingAccount;
    token.name = existingUser.name;
    token.email = existingUser.email;
    token.role = existingUser.role;
    token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

    return token;
  },
};

export default authCallbacks;
