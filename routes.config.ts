// routes/routes.config.ts

export const routeConfig = {
  publicRoutes: ["/", "/auth/new-verification"],
  adminRoutes: {
    root: "/admin",
  },
  userRoutes: {
    root: "/user",
  },
  authRoutes: {
    login: "/auth/login",
    register: "/auth/register",
    error: "/auth/error",
    reset: "/auth/reset",
    newPassword: "/auth/new-password",
  },
  api: {
    authPrefix: "/api/auth",
  },
  redirects: {
    defaultLogin: "/user",
    adminLogin: "/admin",
  },
};
