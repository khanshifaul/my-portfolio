// lib/auth.ts

import { auth } from "@/auth/auth"; // Import the auth function from your auth module

// Helper function to get the current user
export const currentUser = async () => {
  const session = await auth(); // Call the auth function to get the session

  return session?.user || null; // Return the user object or null
};

// Helper function to get the current user's role
export const currentRole = async () => {
  const session = await auth(); // Call the auth function to get the session

  return session?.user?.role || null; // Return the user's role or null
};

// Check if the user is authenticated
export const isAuthenticated = async () => {
  const user = await currentUser(); // Get the current user

  return !!user; // Returns true if the user is authenticated
};

// Check if the user has a specific role
export const hasRole = async (role: string) => {
  const userRole = await currentRole(); // Get the current user's role

  return userRole === role; // Check if the user's role matches the specified role
};
