import React, { useEffect, useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { GeoJsonLayer } from "@deck.gl/layers/typed";
import { DeckglOverlay } from "../components/deckgl-overlay";

const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json";
const API_KEY = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";

const Mapbox = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ width: "100%", height: "600px" }}>
        <Map
          defaultCenter={{ lat: 37.74, lng: -122.4 }}
          defaultZoom={11}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <DeckglOverlay layers={getDeckGlLayers(data)} />
        </Map>
      </div>
    </APIProvider>
  );
};

function getDeckGlLayers(data) {
  if (!data) return [];

  return [
    new GeoJsonLayer({
      id: "geojson-layer",
      data,
      stroked: false,
      filled: true,
      extruded: true,
      pointType: "circle",
      lineWidthScale: 20,
      lineWidthMinPixels: 4,
      getFillColor: [160, 160, 180, 200],
      getLineColor: (f) => {
        const hex = f?.properties?.color;

        if (!hex) return [0, 0, 0];

        return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16));
      },
      getPointRadius: 200,
      getLineWidth: 1,
      getElevation: 30,
    }),
  ];
}

export default Mapbox;
