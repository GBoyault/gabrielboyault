"use client";

import clsx from "clsx";

import { useProjects } from "@/app/contexts/projects-context";
import { Introduction, Project } from "@/app/components";

export const Main = () => {
  const { projects, activeProject } = useProjects();

  return (
    <main className="relative min-h-[380px] md:min-h-0">
      <Introduction isActive={!activeProject} />
      {projects.map((project) => (
        <div
          key={project.name}
          className={clsx("absolute top-0 left-0", {
            "pointer-events-none": project.name !== activeProject?.name,
          })}
        >
          <Project
            project={project}
            isActive={project.name === activeProject?.name}
          />
        </div>
      ))}
    </main>
  );
};
