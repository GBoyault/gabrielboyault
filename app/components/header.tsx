"use client";

import { useProjects } from "@/app/hooks";

export const Header = () => {
  const { setActiveProject } = useProjects();

  return (
    <header className="mb-8 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-extralight mb-1 md:mb-4">
        <button className="text-left" onClick={() => setActiveProject(null)}>
          Gabriel Boyault
        </button>
      </h1>
      <h2 className="md:text-xl">Développeur front-end / WordPress nantais</h2>
    </header>
  );
};
