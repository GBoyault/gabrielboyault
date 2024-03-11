"use client";

import { useEffect, useState } from "react";

export const useScreen = () => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width && width <= 768;

  return { isMobile };
};
