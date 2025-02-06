"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github" | "facebook") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <button
        className="w-full p-2 border rounded-lg flex justify-center items-center"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </button>
      <button
        className="w-full p-2 border rounded-lg flex justify-center items-center"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </button>
      <button
        className="w-full p-2 border rounded-lg flex justify-center items-center"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook className="h-5 w-5" />
      </button>
    </div>
  );
};
