"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <button
      className="text-destructive w-full border border-gray-300 py-2 px-4 text-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
