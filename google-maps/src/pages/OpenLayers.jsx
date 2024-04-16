import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import { Stroke, Style as OLStyle } from "ol/style";
import { LineString } from "ol/geom";
import axios from "axios";

function OpenLayersMap() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 6,
      }),
    });

    // Koordinat titik A dan B
    const pointA = [107.47982936551256, -6.927318730266049]; // Rumah
    const pointB = [107.61869106551214, -6.902247820458362]; // Gedung Sate

    // Marker untuk titik A dan B
    const markerA = new Feature({
      geometry: new Point(fromLonLat(pointA)),
    });

    const markerB = new Feature({
      geometry: new Point(fromLonLat(pointB)),
    });

    // Icon untuk marker
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
      }),
    });

    markerA.setStyle(iconStyle);
    markerB.setStyle(iconStyle);

    // Tambahkan marker ke layer vektor
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerA, markerB],
      }),
    });

    map.addLayer(vectorLayer);

    // Set view agar peta menampilkan kedua marker
    map
      .getView()
      .fit(vectorLayer.getSource().getExtent(), { padding: [50, 50, 50, 50] });

    // Layanan routing untuk mendapatkan rute jalan
    const routeSource = new VectorSource();
    const routeLayer = new VectorLayer({
      source: routeSource,
      style: new Style({
        stroke: new Stroke({
          width: 6,
          color: [40, 40, 40, 0.8],
        }),
      }),
    });
    map.addLayer(routeLayer);

    // Fungsi untuk menampilkan rute jalan
    const displayRoute = async (pointA, pointB) => {
      try {
        const routeUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62480b25f48b08444c30a716ad4430ae2da7&start=${pointA[0]},${pointA[1]}&end=${pointB[0]},${pointB[1]}`;
        const response = await axios.get(routeUrl);
        const { data } = response;
        console.log(data);
        const routeCoordinates = data.features[0].geometry.coordinates;
        const routeGeometry = new LineString(
          routeCoordinates.map((coord) => fromLonLat(coord))
        );
        const route = new Feature({
          geometry: routeGeometry,
        });
        routeSource.addFeature(route);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    // Tampilkan rute jalan
    displayRoute(pointA, pointB);

    return () => {
      map.dispose(); // bersihkan peta saat komponen dilepas
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
}

export default OpenLayersMap;
