"use client";

import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "1",
    title: "Project One",
    subtitle: "This is a brief description of Project One.",
    githubLink: "https://github.com/yourusername/project-one",
    webLink: "https://project-one.com",
    images: [
      "https://picsum.photos/200", // Random Unsplash image
    ],
  },
  {
    id: "2",
    title: "Project Two",
    subtitle: "This is a brief description of Project Two.",
    githubLink: "https://github.com/yourusername/project-two",
    webLink: "https://project-two.com",
    images: [
      "https://picsum.photos/200", // Random Unsplash image
    ],
  },
  {
    id: "3",
    title: "Project Three",
    subtitle: "This is a brief description of Project Three.",
    githubLink: "https://github.com/yourusername/project-three",
    webLink: "https://project-three.com",
    images: [
      "https://picsum.photos/200", // Random Unsplash image
    ],
  },
  {
    id: "4",
    title: "Project Three",
    subtitle: "This is a brief description of Project Three.",
    githubLink: "https://github.com/yourusername/project-three",
    webLink: "https://project-three.com",
    images: [
      "https://picsum.photos/200", // Random Unsplash image
    ],
  },
  {
    id: "5",
    title: "Project Three",
    subtitle: "This is a brief description of Project Three.",
    githubLink: "https://github.com/yourusername/project-three",
    webLink: "https://project-three.com",
    images: [
      "https://picsum.photos/200", // Random Unsplash image
    ],
  },
];

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.h1
        animate={{
          y: [-25, 5, 1],
          opacity: [0, 100],
          transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
        }}
        className="text-3xl font-bold mb-4 border-b-3 border-blue-500"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => {
          // Generate random x, y, and opacity offsets for each card
          const randomX = Math.random() * 500 - 300; // Random value between -300 and 200
          const randomY = Math.random() * 500 - 200; // Random value between -200 and 300

          return (
            <motion.div
              key={project.id}
              animate={{ opacity: 1, x: 0, y: 0 }}
              className={
                index < 2 ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
              }
              exit={{ opacity: 0, x: 0, y: 0 }}
              initial={{ opacity: 0, x: randomX, y: randomY }}
              transition={{ duration: 2 }} // Apply the random delay
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
