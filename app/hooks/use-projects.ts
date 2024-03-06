"use client";

import { useContext } from "react";
import { ProjectsContext } from "../contexts/projects-context";

export const useProjects = () => {
  return useContext(ProjectsContext);
};
