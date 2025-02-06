// auth/config/auth.config.ts

import type { NextAuthConfig } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import authCallbacks from "@/auth/auth.callbacks";
import authEvents from "@/auth/auth.events";
import providers from "@/auth/auth.providers";
import { db } from "@/lib/db";

const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: authEvents,
  callbacks: authCallbacks,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  trustHost: true,
  providers,
};

export default authConfig;
