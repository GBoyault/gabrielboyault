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
      // initial={hidden}
      animate={animate}
      style={{ originX: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      data-testid="introduction"
      className={clsx(
        "border-l-2 border-purple pl-4 mb-8 md:border-l-4 md:pl-6 md:leading-7",
        { "pointer-events-none": !isActive }
      )}
    >
      <p className="mb-3">
        <a
          href="https://www.youtube.com/watch?v=vt2Sq0Tlc1c"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-purple-light transition"
        >
          Saxophoniste
        </a>{" "}
        de formation, je m'initie au web en 2016 pour créer le site internet
        d'un de mes groupes. Aujourd'hui c'est comme développeur à temps plein
        que j'exprime ma créativité.
      </p>
      <p className="mb-3">
        De React à WordPress, je recherche la même qualité dans mon code,pour
        répondre aux besoins exprimés et pour un rendu précis et élégant.
      </p>
      <p>Découvrez ici des projets pro ou perso que j'ai aimé réaliser.</p>
    </motion.div>
  );
};
