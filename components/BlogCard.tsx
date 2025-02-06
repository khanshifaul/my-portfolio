"use client";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  image: string;
  readLink: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-light shadow-md shadow-blue-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative group">
        <img
          alt={blog.title}
          className="w-full h-[25rem] object-cover transition-transform duration-300 ease-in-out"
          src={blog.image}
        />
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity h-full w-full" />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity h-full w-full">
          <Link
            className="text-blue-500 hover:underline w-full h-full flex justify-center items-center"
            href={blog.readLink}
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="p-4 w-2/3 absolute bottom-0 left-0 bg-gradient-to-l from-transparent via-blue-300 to-blue-500 dark:via-slate-900 dark:to-blue-900">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{blog.excerpt}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{`${blog.author} | ${blog.publishedDate}`}</p>
      </div>
    </div>
  );
};

export default BlogCard;
