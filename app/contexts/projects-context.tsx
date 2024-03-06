"use client";

import { createContext, useState, type PropsWithChildren } from "react";

import { Project } from "@/app/definitions";
import { projects } from "@/app/data";

type ProjectsContextType = {
  projects: Project[];
  activeProject: Project | null;
  setActiveProject: (project: Project | null) => void;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  projects,
  activeProject: null,
  setActiveProject: () => {},
});

export const ProjectsContextProvider = ({ children }: PropsWithChildren) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <ProjectsContext.Provider
      value={{ projects, activeProject, setActiveProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
