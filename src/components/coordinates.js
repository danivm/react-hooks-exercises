import React from "react";
import useCoordinates from "../hooks/coordinates";

export default function Coordinates() {
  const { coordinates } = useCoordinates();

  return (
    <div>
      <p>
        {coordinates.x} - {coordinates.y}
      </p>
    </div>
  );
}
