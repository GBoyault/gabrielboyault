"use client";

import clsx from "clsx";
import { useProjects } from "@/app/hooks";
import { Project } from "@/app/definitions";

export const ProjectNav = () => {
  const { projects, activeProject, setActiveProject } = useProjects();

  const activeProjectHandler = (project: Project) => {
    if (activeProject?.name === project.name) {
      setActiveProject(null);
    } else {
      setActiveProject(project);
    }
  };

  return (
    <nav>
      <h2 className="text-2xl md:text-[32px] mb-4 md:mb-6 font-light">
        Projets
      </h2>

      <ul className="border-l-2 border-purple pl-4 md:border-r-4 md:border-l-0 md:pr-6 md:pl-0">
        {projects.map((project) => (
          <ProjectNavItem
            key={project.name}
            name={project.name}
            isActive={activeProject?.name === project.name}
            onActiveProject={activeProjectHandler.bind(null, project)}
          />
        ))}
      </ul>
    </nav>
  );
};

type ProjectNavItem = {
  name: string;
  isActive: boolean;
  onActiveProject: () => void;
};

const ProjectNavItem = ({
  name,
  isActive,
  onActiveProject,
}: ProjectNavItem) => {
  return (
    <li
      className={clsx(
        "text-base md:text-xl mb-2 md:mb-4 last-of-type:mb-0 group w-max",
        {
          "text-white font-semibold": isActive,
        }
      )}
    >
      <button
        data-testid="project-button"
        className="border-b-2 border-purple pb-0.5 md:pb-1.5 group-hover:border-purple-light transition"
        onClick={onActiveProject}
      >
        {name}
      </button>
    </li>
  );
};
