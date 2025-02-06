"use client";
import { motion } from "framer-motion";

import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    id: "1",
    title: "Blog Post One",
    excerpt: "This is a brief description of Blog Post One.",
    author: "John Doe",
    publishedDate: "November 3, 2024",
    image: "https://picsum.photos/200/300?random=1",
    readLink: "https://blog-one.com",
  },
  {
    id: "2",
    title: "Blog Post Two",
    excerpt: "This is a brief description of Blog Post Two.",
    author: "Jane Doe",
    publishedDate: "November 4, 2024",
    image: "https://picsum.photos/200/300?random=2",
    readLink: "https://blog-two.com",
  },
  {
    id: "3",
    title: "Blog Post Three",
    excerpt: "This is a brief description of Blog Post Three.",
    author: "Mark Smith",
    publishedDate: "November 5, 2024",
    image: "https://picsum.photos/200/300?random=3",
    readLink: "https://blog-three.com",
  },
  {
    id: "4",
    title: "Blog Post Four",
    excerpt: "This is a brief description of Blog Post Four.",
    author: "Lucy Brown",
    publishedDate: "November 6, 2024",
    image: "https://picsum.photos/200/300?random=4",
    readLink: "https://blog-four.com",
  },
  {
    id: "5",
    title: "Blog Post Five",
    excerpt: "This is a brief description of Blog Post Five.",
    author: "Tom Johnson",
    publishedDate: "November 7, 2024",
    image: "https://picsum.photos/200/300?random=5",
    readLink: "https://blog-five.com",
  },
];

const BlogPage = () => {
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
        My Blogs
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blogs.map((blog, index) => {
          // Generate random x, y, and opacity offsets for each card
          const randomX = Math.random() * 500 - 300; // Random value between -300 and 200
          const randomY = Math.random() * 500 - 200; // Random value between -200 and 300

          return (
            <motion.div
              key={blog.id}
              animate={{ opacity: 1, x: 0, y: 0 }}
              className={
                index < 2 ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
              }
              exit={{ opacity: 0, x: 0, y: 0 }}
              initial={{ opacity: 0, x: randomX, y: randomY }}
              transition={{ duration: 2 }} // Apply the random delay
            >
              <BlogCard blog={blog} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
