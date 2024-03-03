"use client";

import { useProjects } from "@/app/contexts/projects-context";
import { ArrowLeft, ArrowLeftLarge } from "@/app/components/icons";

export const BackButton = () => {
  const { setActiveProject } = useProjects();

  return (
    <button data-testid="back-button" onClick={() => setActiveProject(null)} title="Retour">
      <span className="md:hidden">
        <ArrowLeft />
      </span>
      <span className="hidden md:inline">
        <ArrowLeftLarge />
      </span>
    </button>
  );
};
