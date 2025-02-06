// /admin/components/Navbar.tsx
"use client";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

import MenuClose from "../menu-close";
import MenuOpen from "../menu-open";
import { ThemeSwitch } from "../theme-switch";

import { SearchIcon } from "@/components/icons";
import { selectNavIsOpen } from "@/lib/features/navigation/navigationSlice";
import { useAppSelector } from "@/lib/hooks";
export default function Navbar() {
  const navIsOpen = useAppSelector(selectNavIsOpen);
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <nav className="w-full h-16 flex gap-5 items-center justify-between p-4 border-b-1">
      <div className="flex justify-center items-center p-2">
        <div className="md:hidden block">
          {!navIsOpen ? <MenuOpen /> : <MenuClose />}
        </div>

        <Link className="flex justify-start items-center gap-1" href="/">
          <h1 className="text-2xl font-extrabold leading-none font-AmadeusAP p-2">
            <span className="mr-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700">
              Shifaul
            </span>
            <br />
            <span className="ml-10 bg-clip-text text-transparent bg-gradient-to-l from-blue-700 to-red-700">
              Islam
            </span>
          </h1>
        </Link>
      </div>
      <div className="md:w-1/2">{searchInput}</div>
      <div className="flex gap-2 justify-center items-center">
        <ThemeSwitch />

        <div className="flex items-center gap-2">
          <span className="text-nowrap">Welcome! Admin</span>
          <FaRegUser className="text-2xl border rounded-full" />
        </div>
      </div>
    </nav>
  );
}
