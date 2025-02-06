// app/(protected)/admin/projects/page.tsx
"use client";
import { useSelector } from "react-redux";

import ProjectForm from "@/components/admin/ProjectForm";
import ProjectPreview from "@/components/admin/ProjectPreview";
import { RootState } from "@/lib/store";

export default function ProjectsPage() {
  const project = useSelector((state: RootState) => state.project.project);

  return (
    <div className="p-6">
      <div className="flex w-full gap-5">
        <div className="w-full shadow-md shadow-blue-300 p-4">
          <h2 className="text-2xl font-bold mb-4">Create a New Project</h2>
          <ProjectForm onSubmit={() => console.log("Project submitted!")} />
        </div>
        <div className="w-full shadow-md shadow-blue-300 p-4">
          <h2 className="text-2xl font-bold mb-4">Project Preview</h2>
          {project && <ProjectPreview project={project} />}
        </div>
      </div>
    </div>
  );
}
