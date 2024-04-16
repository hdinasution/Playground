import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

import ControlPanel from "../components/ControlPanel";
import { MovingMarker } from "../components/MovingMarker";
import { MarkerWithInfowindow } from "../components/MarkerWithInfoWindows";
import { useState } from "react";
import { Direction } from "../components/Direction";

const API_KEY = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";

export default function GoogleMaps() {
  const [play, setPlay] = useState(false);
  // Fungsi untuk mengonfigurasi opsi peta
  const configureMapOptions = (map) => {
    // Sembunyikan kontrol zoom
    map.setOptions({
      zoomControl: false,
    });
  };
  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <div style={{ width: "100%", height: "600px" }}>
        <Map
          mapId={"bf51a910020fa25a"}
          defaultZoom={12}
          defaultCenter={{ lat: -6.927318730266049, lng: 107.47986155201951 }}
          zoomControlOptions={{
            position: google.maps.ControlPosition.RIGHT_TOP,
          }}
          fullscreenControlOptions={{
            position: google.maps.ControlPosition.RIGHT_TOP,
          }}
          // fullscreenControl={true}
          // zoomControl={false}
          // disableDefaultUI={{ disableDefaultUI: true }}
          streetViewControlOptions={{
            position: google.maps.ControlPosition.RIGHT_TOP,
          }}
          mapTypeControlOptions={{
            position: google.maps.ControlPosition.TOP_RIGHT,
          }}
        >
          <Direction
            destination={"Gedung Sate"}
            origin={"dapur_mayaki"}
            travelMode={"DRIVING"}
            routeColor={"blue"}
          />
          <Direction
            destination={"Pusdik Kopassus"}
            origin={"dapur_mayaki"}
            travelMode={"DRIVING"}
            routeColor={"red"}
          />
          {play || <MovingMarker />}
          <ControlPanel
            play={() => {
              setPlay(!play);
            }}
            isPlay={play}
          />
        </Map>
      </div>
    </APIProvider>
  );
}

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// export default function GoogleMaps() {
//   const position = { lat: -6.927371982836981, lng: 107.47986155201951 };
//   const [open, setOpen] = useState(false);
//   const API_KEY = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";
//   const MAP_ID = "bf51a910020fa25a";

//   return (
//     <APIProvider apiKey={API_KEY}>
//       <div style={{ height: "600px", width: "100%" }}>
//         <Map
//           defaultZoom={12}
//           defaultCenter={position}
//           mapId={MAP_ID}
//           gestureHandling={"greedy"}
//         >
//           <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//             <Pin
//               background={"blue"}
//               borderColor={"white"}
//               glyphColor={"white"}
//             ></Pin>
//           </AdvancedMarker>
//           {open ?? (
//             <InfoWindow position={position} onClick={() => setOpen(false)}>
//               <p>Hehee</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }
