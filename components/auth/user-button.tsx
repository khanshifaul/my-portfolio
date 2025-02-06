"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdLogout, MdOutlineSettings } from "react-icons/md";

import { LogoutButton } from "@/components/auth/logout-button";
import { useCurrentUser } from "@/lib/hooks";

export const UserButton = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      <button
        className="h-8 w-8 border rounded-full flex items-center justify-center"
        onClick={handleMenuToggle}
      >
        {user?.image ? (
          <img
            alt="User Avatar"
            className="h-full w-full rounded-full"
            src={user.image}
          />
        ) : (
          <FaUser className="text-xl" />
        )}
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          <div className="flex flex-col gap-1 p-1">
            <button
              className="flex items-center p-2 hover:bg-gray-100 rounded w-full text-left"
              onClick={() => {
                setIsMenuOpen(false);
                router.push(user && user.role === "ADMIN" ? "/admin" : "/user");
              }}
            >
              <MdOutlineSettings className="mr-2" />
              {user?.role === "ADMIN" ? "Dashboard" : "Settings"}
            </button>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded w-full text-left">
              <LogoutButton>
                <MdLogout className="mr-2" />
                Logout
              </LogoutButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
