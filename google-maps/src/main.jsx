import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Sidebar from "./components/Sidebar";
import GoogleMaps from "./pages/GoogleMaps";
import OpenLayers from "./pages/OpenLayers";
import Mapbox from "./pages/Mapbox";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// const Sidebar = lazy(() => import("./components/Sidebar"));
// const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const Reports = lazy(() => import("./pages/Reports"));

const AppLayout = () => (
  <div className="container">
    {/* <Sidebar />
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense> */}
    <Sidebar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <GoogleMaps />,
      },
      {
        path: "/openlayers",
        element: <OpenLayers />,
      },
      {
        path: "/mapbox",
        element: <Mapbox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
