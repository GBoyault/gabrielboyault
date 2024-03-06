"use client";

import { useFollowPointer } from "@/app/hooks";

export const CursorGradient = () => {
  const { x, y } = useFollowPointer();

  const gradient = `radial-gradient(750px at ${x}px ${y}px, #c77fea80, transparent`;

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
