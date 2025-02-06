// components/navbar.tsx
"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import {
  DiscordIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  TwitterIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import {
  closeNav,
  selectNavIsOpen,
  toggleNav,
} from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();
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
    <NextUINavbar isMenuOpen={navIsOpen} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <h1 className="text-2xl font-extrabold leading-none font-AmadeusAP p-2">
              <span className="mr-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700">
                Shifaul
              </span>
              <br />
              <span className="ml-10 bg-clip-text text-transparent bg-gradient-to-l from-blue-700 to-red-700">
                Islam
              </span>
            </h1>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={twMerge(
                  clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  ),
                  item.href === path &&
                    "underline decoration-2 decoration-blue-500"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle
          onChange={() => {
            dispatch(toggleNav());
          }}
        />
      </NavbarContent>

      {/* Conditionally render NavbarMenu when navIsOpen is true */}
      {navIsOpen && (
        <NavbarMenu>
          {searchInput}
          <motion.div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={item.href === path ? "primary" : "foreground"}
                  href={item.href}
                  size="lg"
                  onClick={() => {
                    router.push(item.href);
                    dispatch(closeNav());
                  }}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </motion.div>
        </NavbarMenu>
      )}
    </NextUINavbar>
  );
};
