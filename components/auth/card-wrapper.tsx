"use client";

import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="w-[400px] shadow-md">
      <div>
        <Header label={headerLabel} />
      </div>
      <div>{children}</div>
      {showSocial && (
        <div>
          <Social />
        </div>
      )}
      <div>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </div>
    </div>
  );
};
