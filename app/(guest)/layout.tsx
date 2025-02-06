import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <p className="text-default-600 flex">
          2024 &copy; Developed & designed by &nbsp;
          <span className="font-DancingScript text-red-700 font-semibold">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="/"
              title="Portfolio"
            >
              Shifaul Islam
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
}
