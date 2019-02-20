import { useState, useEffect } from "react";

export default function useCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  function handleMouseMove(event) {
    setCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  }

  return { coordinates };
}
