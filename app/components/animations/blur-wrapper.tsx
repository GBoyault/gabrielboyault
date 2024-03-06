"use client";

import { motion } from "framer-motion";

type FancyBoxProps = {
  children: React.ReactNode;
  className: string;
};

export const BlurWrapper = ({ children, className }: FancyBoxProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(100px)", opacity: 0 }}
      animate={{ filter: "blur(0)", opacity: 1 }}
      transition={{ duration: 2.5, bounce: 0, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
