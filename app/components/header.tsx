"use client";

import { motion } from "framer-motion";
import { useProjects, useScreen } from "@/app/hooks";
import clsx from "clsx";

export const Header = () => {
  const { activeProject, setActiveProject } = useProjects();
  const { isMobile } = useScreen();

  if (!isMobile) {
    return (
      <h1 className="text-4xl md:text-6xl font-extralight mb-1 md:mb-4">
        <button className="text-left" onClick={() => setActiveProject(null)}>
          Gabriel Boyault
        </button>
      </h1>
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
      className={clsx("md:mb-12", { "mb-8": isVisible })}
    >
      <h1
        className={clsx("text-4xl md:text-6xl font-extralight mb-1 md:mb-4", {
          "": isVisible,
        })}
      >
        Gabriel Boyault
      </h1>
      <h2 className={clsx("md:text-xl", { "": isVisible })}>
        Développeur front-end / WordPress nantais
      </h2>
    </motion.header>
  );
};
