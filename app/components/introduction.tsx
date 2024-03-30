"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type IntroductionProps = {
  isActive: boolean;
};

export const Introduction = ({ isActive }: IntroductionProps) => {
  const hidden = { scaleX: 0.5, opacity: 0 };
  const visible = { scaleX: 1, opacity: 1 };
  const animate = isActive ? visible : hidden;

  return (
    <motion.div
      animate={animate}
      style={{ originX: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      data-testid="introduction"
      className={clsx(
        "border-l-2 border-purple pl-4 mb-14 md:mb-8 md:border-l-4 md:pl-6 md:leading-7",
        { "pointer-events-none": !isActive }
      )}
    >
      <p className="mb-3">
        D'abord{" "}
        <a
          href="https://www.youtube.com/watch?v=YF9B8DP32bs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-light transition"
          title="?!"
        >
          saxophoniste
        </a>{" "}
        de jazz, c'est comme développeur à temps plein depuis 2019 que j'exprime
        ma créativité.
      </p>
      <p className="mb-3">
        En React ou vanilla JavaScript, je recherche la même qualité dans mon code, pour
        répondre aux besoins exprimés avec un rendu précis et élégant.
      </p>
    </motion.div>
  );
};
