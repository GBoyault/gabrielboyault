"use client";

import clsx from "clsx";

import { useProjects, useScreen } from "@/app/hooks";
import { Introduction, Project } from "@/app/components";

export const Main = () => {
  const { projects, activeProject } = useProjects();
  const { isMobile } = useScreen();

  return (
    <main className="relative min-h-[320px] md:min-h-0">
      <Introduction isActive={isMobile || !activeProject} />
      <div className="text-3xl font-light md:hidden mb-6">Projets</div>
      {projects.map((project) => (
        <div
          key={project.name}
          className={clsx("md:absolute md:top-0 md:left-0", {
            "pointer-events-none": project.name !== activeProject?.name,
          })}
        >
          <Project
            project={project}
            isActive={isMobile || project.name === activeProject?.name}
          />
        </div>
      ))}
    </main>
  );
};
