"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { sendMessage } from "@/actions/message-sender";

const ContactForm = () => {
  const [formData, setFormData] = useState<
    Record<"name" | "email" | "subject" | "message", string>
  >({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Saving...");

    // Send message through the sendMessage action
    const response = await sendMessage(formData);

    if (response.success) {
      setStatus("Message saved successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
    } else {
      setStatus(`Failed to save message: ${response.message}`);
    }
  };

  const inputFields: {
    name: keyof typeof formData;
    placeholder: string;
    type: string;
  }[] = [
    { name: "name", placeholder: "Your Name", type: "text" },
    { name: "email", placeholder: "Your Email", type: "email" },
    { name: "subject", placeholder: "Subject", type: "text" },
    { name: "message", placeholder: "Your Message", type: "textarea" },
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
          I&apos;d love to hear from you! Whether you have questions or
          feedback, feel free to reach out. I&apos;ll respond as soon as I can!
        </motion.p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg shadow-lg shadow-blue-400 max-w-md w-full min-h-[50vh]"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {inputFields.map((field, index) => (
              <motion.div
                key={field.name}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                {field.type === "textarea" ? (
                  <textarea
                    required
                    className="border p-2 rounded h-32 w-full"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    required
                    className="border p-2 rounded w-full"
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              animate={{ x: 0, opacity: 1 }}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * inputFields.length }}
              type="submit"
            >
              Save Message
            </motion.button>
            {status && <p className="mt-4 text-gray-700">{status}</p>}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
