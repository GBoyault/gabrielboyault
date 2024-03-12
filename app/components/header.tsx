"use client";

import { motion } from "framer-motion";
import { useProjects, useScreen } from "@/app/hooks";
import clsx from "clsx";

export const Header = () => {
  const { activeProject, setActiveProject } = useProjects();
  const { isMobile } = useScreen();

  if (!isMobile) {
    return (
      <header className="mb-12">
        <h1 className="text-6xl font-extralight mb-4">
          <button className="text-left" onClick={() => setActiveProject(null)}>
            Gabriel Boyault
          </button>
        </h1>
        <h2 className="text-xl">Développeur front-end / WordPress nantais</h2>
      </header>
    );
  }

  const isVisible = !activeProject;
  const hidden = { scaleY: 0.5, opacity: 0, height: 0 };
  const visible = { scaleY: 1, opacity: 1, height: "auto" };
  const animate = isVisible ? visible : hidden;

  return (
    <motion.header
      animate={animate}
      style={{ originY: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      className={clsx({ "mb-6": isVisible })}
    >
      <h1 className="text-4xl font-extralight mb-1">Gabriel Boyault</h1>
      <h2>Développeur front-end / WordPress nantais</h2>
    </motion.header>
  );
};
