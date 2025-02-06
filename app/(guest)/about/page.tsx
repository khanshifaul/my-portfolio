"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function AboutPage() {
  return (
    <AnimatePresence>
      <div className="w-full flex justify-center items-center">
        <motion.h1
          animate={{
            y: [-25, 5, 1],
            opacity: [0, 100],
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
          }}
          className="text-3xl font-bold mb-4 border-b-3 border-blue-500"
        >
          About myself
        </motion.h1>
      </div>
      {/* Who I Am */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Who I Am
        </motion.h2>
        <div className="flex md:flex-row flex-col-reverse gap-5 md:justify-evenly">
          <motion.p
            animate={{
              x: [50, 1],
              scale: [0.8, 1],
              opacity: [0, 100, 100],
            }}
            className="text-lg w-full"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            I’m Md Shifaul Islam, a passionate software engineer and aspiring
            researcher dedicated to integrating Artificial Intelligence (AI) and
            Brain-Computer Interfaces (BCIs). My vision is to create
            thought-controlled systems that empower individuals with physical
            disabilities, enabling them to interact with the digital world in
            revolutionary ways. With a solid background in web development,
            virtual assistance, and neurotechnologies, I’m committed to
            advancing technology for greater accessibility and personalization.
          </motion.p>
          <div className="aspect-square flex justify-center items-center">
            <motion.img
              alt={"photo of Shifaul"}
              animate={{
                opacity: [0, 100],
                scale: [0.8, 1],
              }}
              className="object-scale-down object-center border-8 border-spacing-4 rounded-full"
              height={250}
              src={"/images/shifaul.png"}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
              width={250}
            />
          </div>
        </div>
      </section>

      {/* Education/Academic Qualification */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Education
        </motion.h2>
        <motion.ul
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="list-disc ml-6 space-y-2"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <motion.li className="text-lg">
            Diploma in Engineering (Computer) – Bangladesh Technical Education
            Board (CGPA 3.67/4.00)
          </motion.li>
          <motion.li className="text-lg">
            Secondary School Certificate (Science) – Rajshahi Education Board
            (GPA 5.00/5.00)
          </motion.li>
        </motion.ul>
      </section>

      {/* Skills & Expertise */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Skills & Expertise
        </motion.h2>

        {/* Technical Skills */}
        <motion.div
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="mb-6"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <h3 className="text-xl font-medium">Technical Skills</h3>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Programming Languages: JavaScript, Python, C++, C#</li>
            <li>Web Development: React.js, Vue.js, Tailwind CSS, TypeScript</li>
            <li>Frameworks: Next.js, Nuxt.js, Django, Node.js, Prisma</li>
            <li>
              Embedded Systems: Arduino, ESP32 (proficient in MicroPython and
              C++ for IoT projects)
            </li>
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <h3 className="text-xl font-medium">Soft Skills</h3>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              Problem Solving: Strong analytical skills to break down complex
              challenges
            </li>
            <li>
              Communication: Effectively convey technical ideas to non-technical
              audiences
            </li>
            <li>
              Adaptability: Willingness to learn and adapt to rapidly evolving
              tech landscapes
            </li>
            <li>
              Collaboration: Enjoys teamwork and values the importance of
              diverse perspectives
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Language Proficiency */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Language Proficiency
        </motion.h2>
        <motion.ul
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="list-disc ml-6 space-y-2 text-lg"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <li>Bengali: Native</li>
          <li>English: Fluent in reading, writing, and speaking</li>
          <li>Russian: Beginner; can read, write, and speak basic phrases</li>
          <li>Hindi: Conversational</li>
          <li>Arabic: Basic reading comprehension with a dictionary</li>
          <li>Urdu: Limited understanding</li>
        </motion.ul>
      </section>

      {/* Future Goals */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Future Goals
        </motion.h2>

        {/* Research Interests */}
        <motion.div
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="mb-6"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <h3 className="text-xl font-medium">Research Interests</h3>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              Brain-Computer Interfaces (BCI): Focused on decoding brain signals
              to enable seamless human-computer interaction.
            </li>
            <li>
              AI in Accessibility: Leveraging AI to create assistive technology
              for individuals with physical limitations.
            </li>
            <li>
              Human-Robot Interaction: Developing systems that integrate BCI and
              robotics to create thought-controlled devices.
            </li>
          </ul>
        </motion.div>

        {/* Career Aspirations */}
        <motion.div
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <h3 className="text-xl font-medium">Career Aspirations</h3>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              Contribute to AI-BCI Research: Engage in collaborative research
              projects aimed at enhancing neurotechnologies.
            </li>
            <li>
              Develop a Thought-Controlled Operating System: Design an EEG-based
              interface that allows users to control computers and devices
              through thought.
            </li>
            <li>
              Connect with Global Research Communities: Partner with researchers
              and institutions globally to push the boundaries of AI and BCI.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Personal Reflections */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Personal Reflections: Why I Chose This Career Path
        </motion.h2>
        <motion.p
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="text-lg"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          My passion for technology goes beyond mere curiosity; it’s driven by
          the desire to make a meaningful impact. I believe technology has the
          power to bridge gaps, and by merging AI with BCI, I aspire to develop
          tools that can drastically improve the quality of life for people with
          physical challenges. My journey in software engineering is not just
          about mastering skills but about contributing to a future where
          technology is a force for inclusivity and empowerment.
        </motion.p>
      </section>

      {/* Hobbies and Interests */}
      <section className="mb-10">
        <motion.h2
          animate={{
            x: [-50, 1, 1],
            opacity: [0, 100, 100],
          }}
          className="text-2xl font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          # Hobbies and Interests
        </motion.h2>
        <motion.p
          animate={{
            x: [50, 1],
            scale: [0.8, 1],
            opacity: [0, 100, 100],
          }}
          className="text-lg"
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          In my free time, I enjoy photography and exploring nature, as well as
          reading and learning about technology, science fiction, and
          philosophical topics related to the ethics of AI.
        </motion.p>
      </section>
    </AnimatePresence>
  );
}
