"use client";

import { motion } from "framer-motion";
import { Project as ProjectType } from "@/app/definitions";
import {
  BackButton,
  ProjectLinks,
  Technos,
  ProjectImages,
} from "@/app/components/project";

type ProjectProps = {
  project: ProjectType;
  isActive: boolean;
};

export const Project = ({ project, isActive }: ProjectProps) => {
  const { name, description, links, images, technos } = project;

  const hidden = { scaleX: 0.5, opacity: 0 };
  const visible = { scaleX: 1, opacity: 1 };
  const animate = isActive ? visible : hidden;

  return (
    <motion.div
      initial={hidden}
      animate={animate}
      style={{ originX: 1 }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      className="mb-12 md:mb-0"
    >
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2
          data-testid="project-heading"
          className="text-xl md:text-[32px] font-light"
        >
          {name}
        </h2>
        <div className="hidden md:block">
          <ProjectLinks links={links} />
        </div>
      </div>
      <div className="border-l-2 border-purple pl-4 mb-6 md:mb-8 md:border-l-4 md:pl-6">
        <div className="mb-4 md:mb-6 md:leading-7">{description}</div>
        <div className="flex mb-4 gap-2 md:gap:6">
          <div className="mb-4 flex-shrink-0">
            <ProjectImages images={images} />
          </div>
          <Technos technos={technos} />
        </div>

        <div className="md:hidden">
          <ProjectLinks links={links} />
        </div>
      </div>
      <div className="hidden md:block">
        <BackButton />
      </div>
    </motion.div>
  );
};
