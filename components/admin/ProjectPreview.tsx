import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  subtitle?: string;
  githubLink?: string;
  webLink?: string;
  images: string[];
}

interface ProjectPreviewProps {
  project: Project;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="p-4 mt-4"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-light shadow-md shadow-blue-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="relative group">
          <img
            alt={project.title}
            className="w-full h-[25rem] object-cover"
            src={project.images[0]}
          />
          <div className="absolute inset-0 dark:bg-black dark:group-hover:bg-opacity-0 bg-opacity-0 dark:bg-opacity-60" />
        </div>
        <div className="p-4 w-2/3 absolute bottom-0 left-0 bg-gradient-to-l from-transparent via-blue-300 to-blue-500 dark:via-slate-900 dark:to-blue-900">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {project.subtitle}
          </p>
          <div className="flex gap-10 justify-center items-center mt-4">
            {project.githubLink && (
              <Link
                className="text-blue-500 hover:underline"
                href={project.githubLink}
              >
                GitHub
              </Link>
            )}
            {project.webLink && (
              <Link
                className="text-blue-500 hover:underline"
                href={project.webLink}
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
