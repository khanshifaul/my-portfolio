// ProjectForm.tsx
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setProject } from "@/lib/features/project/projectSlice";

interface Project {
  title: string;
  subtitle?: string;
  githubLink?: string;
  webLink?: string;
  images: string[];
  tags?: string[];
}

interface ProjectFormProps {
  onSubmit: () => void; // Optional callback for additional actions
}

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const dispatch = useDispatch(); // Correctly use the dispatch function
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [webLink, setWebLink] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleImageUpload = (result: any) => {
    const secureUrl = result.info?.secure_url;

    if (secureUrl) {
      setImages((prevImages) => [...prevImages, secureUrl]);
      console.log("Uploaded image URL:", secureUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the new project object
    const newProject: Project = {
      title,
      subtitle,
      githubLink,
      webLink,
      images,
      tags,
    };

    // Dispatch the action to store the project data in Redux
    dispatch(setProject(newProject));

    // Call the onSubmit callback for any additional actions
    onSubmit();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        required
        className="w-full p-2 border rounded"
        placeholder="Project Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Project Subtitle"
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="GitHub Link"
        type="url"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Website Link"
        type="url"
        value={webLink}
        onChange={(e) => setWebLink(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Tags (comma separated)"
        type="text"
        value={tags.join(", ")}
        onChange={(e) =>
          setTags(e.target.value.split(",").map((tag) => tag.trim()))
        }
      />
      <div className="w-full flex justify-start items-center gap-2">
        <CldUploadButton
          className="bg-blue-500 p-2 rounded text-white text-nowrap"
          uploadPreset="default"
          onSuccess={handleImageUpload}
        >
          Upload Images
        </CldUploadButton>

        <p className="w-full p-2 border rounded text-md text-start">
          URLs: {images.join(", ")}
        </p>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Submit Project
        </button>
      </div>
    </form>
  );
}
