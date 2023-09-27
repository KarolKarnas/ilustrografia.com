import { useEffect } from "react";

export const useMouseMove = (onMouseMove: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);
};