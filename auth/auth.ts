// auth/auth.ts

import NextAuth from "next-auth";

import authConfig from "@/auth/auth.config";

// Destructuring to expose GET and POST handlers, plus other auth-related functions
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({ ...authConfig });
