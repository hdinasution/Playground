import { useEffect, useState } from "react";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import "../../src/App.css";

export const MovingMarker = () => {
  const [position, setPosition] = useState({
    lat: -6.927371982836981,
    lng: 107.47986155201951,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const maxOffset = 0.01;

      const latOffset = (Math.random() * 2 - 1) * maxOffset;
      const lngOffset = (Math.random() * 2 - 1) * maxOffset;

      const lat = position.lat + latOffset;
      const lng = position.lng + lngOffset;

      setPosition({ lat, lng });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fleet">
      <AdvancedMarker position={position} className="marker">
        <Pin background={"blue"} borderColor={"white"} scale={1.4}>
          🚚
        </Pin>
      </AdvancedMarker>
    </div>
  );
};
