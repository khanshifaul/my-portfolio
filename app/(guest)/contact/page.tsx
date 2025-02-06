"use client";

import { motion } from "framer-motion";

import ContactForm from "@/components/ContactForm";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";

export default function ContactPage() {
  return (
    <motion.div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 p-4 w-full h-full">
      {/* Social Media Links Column */}
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center">
        <motion.h2
          animate={{
            y: [-25, 5, 1],
            opacity: [0, 100],
            transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
          }}
          className="text-3xl font-bold mb-4 border-b-3 border-blue-500"
        >
          Connect with Me
        </motion.h2>
        <SocialMediaLinks />
      </div>

      {/* Contact Form Column */}
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center">
        <motion.h2
          animate={{
            y: [-25, 5, 1],
            opacity: [0, 100],
            transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
          }}
          className="text-3xl font-bold mb-4 border-b-3 border-blue-500"
        >
          Send Me a Message
        </motion.h2>
        <ContactForm />
      </div>
    </motion.div>
  );
}
