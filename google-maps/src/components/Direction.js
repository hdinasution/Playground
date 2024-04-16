import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState, useRef } from "react";
export const Direction = ({ origin, destination, travelMode, routeColor }) => {
  const map = useMap(); // map target yg akan ditempel rute
  const routesLibrary = useMapsLibrary("routes"); // panggil liblary routes untuk gambar rute
  const directionServicesRef = useRef();
  const directionRendererRef = useRef();
  const [routes, setRoutes] = useState([]); // state untuk menyimpan data rute

  useEffect(() => {
    if (!routesLibrary || !map) return; // kalo map dan liblary blm ada, maka cancel
    // ambil fungsi DirectionService dari liblary rute, lalu set up di state service
    directionServicesRef.current = new routesLibrary.DirectionsService();
    // ambil fungsi DirectionRenderer dari liblary rute, lalu set up di state renderer
    directionRendererRef.current = new routesLibrary.DirectionsRenderer({
      map,
      polylineOptions: {
        strokeColor: routeColor, // Warna - default #000000
        strokeOpacity: 0.8, // opacity - default 1 (tidak transparant)
        strokeWeight: 3, // Ketebalan - default 3
        strokeDashArray: [10, 5], // Pola putus-putus: 10 piksel solid, 5 piksel kosong - default null
        clickable: false, // Garis rute dapat diklik - default false
        zIndex: 0, // Urutan tumpukan 100 - default 0 (dasar)
      },
    }); // kasih map target

    if (!directionServicesRef.current || !directionRendererRef.current) return; // kalo state blm ada, maka cancel
    // jika ada maka set up directionServices
    directionServicesRef.current
      .route({
        origin,
        destination,
        travelMode,
        // provideRouteAlternatives: true, // sediakan rute alternatif
      })
      .then((response) => {
        directionRendererRef.current.setDirections(response); // set up response ke service
        setRoutes(response.routes); // set up data rute dari response
      });
  }, [map, routesLibrary, origin, destination, travelMode]);
};
