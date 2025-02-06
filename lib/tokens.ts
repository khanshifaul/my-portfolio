// lib/tokens.ts

import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Default expiration times for different token types (in seconds)
const TOKEN_EXPIRATION = {
  TWO_FACTOR: 300, // 5 minutes
  PASSWORD_RESET: 3600, // 1 hour
  EMAIL_VERIFICATION: 86400, // 1 day
};

// Generate a token with a specified payload and expiration time
const generateToken = (payload: object, expiresIn: number): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

// Verify a token and return its payload if it's a JwtPayload, or null if invalid
const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return typeof decoded === "object" ? (decoded as JwtPayload) : null;
  } catch (error) {
    console.error("Invalid or expired token:", error);

    return null;
  }
};

// Generate a two-factor authentication token
export const generateTwoFactorToken = (userId: string): string => {
  return generateToken({ userId, type: "2fa" }, TOKEN_EXPIRATION.TWO_FACTOR);
};

// Generate a password reset token
export const generatePasswordResetToken = (userId: string): string => {
  return generateToken(
    { userId, type: "password_reset" },
    TOKEN_EXPIRATION.PASSWORD_RESET
  );
};

// Generate an email verification token
export const generateEmailVerificationToken = (userId: string): string => {
  return generateToken(
    { userId, type: "email_verification" },
    TOKEN_EXPIRATION.EMAIL_VERIFICATION
  );
};

// Validate and verify token type (2FA, password reset, email verification)
export const validateTokenType = (
  token: string,
  expectedType: "2fa" | "password_reset" | "email_verification"
): { userId: string } | null => {
  const decodedToken = verifyToken(token);

  if (decodedToken && decodedToken.type === expectedType) {
    return { userId: decodedToken.userId as string };
  }
  console.warn(
    `Token type mismatch: expected ${expectedType}, got ${decodedToken ? decodedToken.type : "none"}`
  );

  return null;
};
