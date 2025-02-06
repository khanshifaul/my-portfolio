import { Link } from "@nextui-org/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  VKontakteIcon,
} from "@/components/icons";

export const SocialMediaLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/khan-shifaul",
      icon: <LinkedInIcon className="text-blue-700" />,
      description: "Connect with me on LinkedIn for professional updates.",
    },
    {
      name: "Github",
      href: "https://github.com/khanshifaul",
      icon: <GithubIcon className="text-gray-700" />,
      description:
        "Check out my projects and open-source contributions on GitHub.",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/khanshifaul",
      icon: <TwitterIcon className="text-blue-400" />,
      description: "Catch my latest thoughts and threads on Twitter.",
    },
    {
      name: "Discord",
      href: "https://discord.com/khanshifaul",
      icon: <DiscordIcon className="text-purple-500" />,
      description: "Join my Discord community and be part of the conversation!",
    },

    {
      name: "Facebook",
      href: "https://facebook.com/kh4nsh1f4ul",
      icon: <FacebookIcon className="text-blue-600" />,
      description:
        "Follow me on Facebook for more personal insights and updates.",
    },
    {
      name: "VKontakte",
      href: "https://vk.com/khanshifaul",
      icon: <VKontakteIcon className="text-blue-600" />,
      description: "Follow me on VKontakte for social updates and content.",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div className="flex flex-col items-center gap-8 p-6">
        {/* Intro Text */}
        <motion.p
          animate={{ opacity: 1 }}
          className="text-gray-600 text-center max-w-lg"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          I&apos;m active on various platforms! Follow me on social media to
          stay updated on my latest projects, thoughts, and more.
        </motion.p>

        {/* Social Links */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-h-[50vh]">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center bg-light dark:bg-dark rounded-lg p-4 shadow-md shadow-blue-400 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
              <Link
                isExternal
                aria-label={link.name}
                className="flex flex-col items-center gap-2"
                href={link.href}
              >
                {link.icon}
                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                  {link.name}
                </span>
                <p className="text-sm text-gray-500 text-center max-w-xs">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
