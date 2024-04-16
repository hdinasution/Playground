import { useEffect, useMemo } from "react";
import { GoogleMapsOverlay } from "@deck.gl/google-maps/typed";
import { useMap } from "@vis.gl/react-google-maps";
export const DeckglOverlay = ({ layers }) => {
  const deck = useMemo(() => new GoogleMapsOverlay({ interleaved: true }), []);

  const map = useMap();
  useEffect(() => {
    deck.setMap(map);
  }, [map]);

  useEffect(() => {
    deck.setProps({ layers });
  }, [layers]);

  return null;
};
