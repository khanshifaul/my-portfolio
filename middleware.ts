// middleware.ts

import NextAuth from "next-auth";

import authConfig from "@/auth/auth.config";
import { currentUser } from "@/lib/auth";
import { routeConfig } from "@/routes.config";

const { auth } = NextAuth(authConfig);

function redirectToLogin(nextUrl: URL) {
  const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);

  return Response.redirect(
    new URL(`/auth/login?callbackUrl=${callbackUrl}`, nextUrl)
  );
}

async function hasRequiredRole(
  role: string | undefined,
  requiredRole: "ADMIN" | "USER"
) {
  return role === requiredRole;
}

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const loggedInUser = await currentUser();
  const userRole = loggedInUser?.role;

  const { publicRoutes, authRoutes, api, redirects, adminRoutes, userRoutes } =
    routeConfig;

  // Allow API auth requests to pass through
  if (nextUrl.pathname.startsWith(api.authPrefix)) return;

  // Redirect authenticated users from auth pages to the correct dashboard
  const authRoutesList = Object.values(authRoutes); // Convert object to array of paths

  if (authRoutesList.includes(nextUrl.pathname) && isLoggedIn) {
    const redirectUrl =
      userRole === "ADMIN" ? redirects.adminLogin : redirects.defaultLogin;

    return Response.redirect(new URL(redirectUrl, nextUrl));
  }

  // Redirect to login if accessing protected admin or user routes without required role
  if (
    nextUrl.pathname.startsWith(adminRoutes.root) &&
    !(await hasRequiredRole(userRole, "ADMIN"))
  ) {
    return redirectToLogin(nextUrl);
  }
  if (
    nextUrl.pathname.startsWith(userRoutes.root) &&
    !(await hasRequiredRole(userRole, "USER"))
  ) {
    return redirectToLogin(nextUrl);
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!isLoggedIn && !publicRoutes.includes(nextUrl.pathname)) {
    return redirectToLogin(nextUrl);
  }

  return; // Allow request to proceed
});
