"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion, useIsPresent } from "framer-motion";

import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <motion.section
      animate={{
        y: [25, 1],
        opacity: [0, 100],
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <span className="border rounded-2xl font-semibold p-2 m-2 bg-gradient-to-b dark:from-slate-900 from-slate-300 to-transparent">
          Welcome to my portfolio!
        </span>
      </div>
      <div className="inline-block max-w-xl text-center text-5xl font-extrabold justify-center">
        <span className={title({ size: "sm" })}>I&apos;m &nbsp;</span>
        <span
          className={title({
            color: "violet",
            size: "lg",
            class: "font-AmadeusAP leading-relaxed p-2",
          })}
        >
          Shifaul Islam
        </span>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <div className={subtitle({ class: "mt-4" })}>
          Aspiring Software Engineer | AI & BCI Enthusiast
        </div>
      </div>
      <div className="mt-8 leading-relaxed">
        <span className={subtitle({ class: "mt-4 text-center" })}>
          Explore my journey in software engineering, AI, and BCI technology
          <br /> through my projects, skills, and vision for the future.
        </span>
        <div className="flex gap-3 text-center justify-center items-center mt-8">
          <motion.div
            animate={{
              x: [-25, 1],
              opacity: [0, 100],
              transition: {
                duration: 0.5,
                ease: "easeIn",
                delay: 0.5,
              },
            }}
          >
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.about}
            >
              Know about me
            </Link>
          </motion.div>
          <motion.div
            animate={{
              x: [25, 1],
              opacity: [0, 100],
              transition: {
                duration: 0.5,
                ease: "easeIn",
                delay: 0.5,
              },
            }}
          >
            <Link
              className={buttonStyles({
                color: "default",
                radius: "full",
                variant: "bordered",
              })}
              href={siteConfig.links.contact}
            >
              Connect with me
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        className="privacy-screen"
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        initial={{ scaleX: 1 }}
        style={{ originX: isPresent ? 0 : 1 }}
      />
    </motion.section>
  );
}
