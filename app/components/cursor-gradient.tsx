"use client";

import { useState, useEffect, useCallback } from "react";

export const CursorGradient = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  const gradient = `radial-gradient(750px at ${mousePosition.x}px ${mousePosition.y}px, #c77fea80, transparent`;

  return (
    <div
      aria-hidden
      className="fixed pointer-events-none inset-0 opacity-20"
      style={{
        background: gradient,
      }}
    />
  );
};
