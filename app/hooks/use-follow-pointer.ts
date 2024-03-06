import { useState, useEffect } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
    setPoint({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
