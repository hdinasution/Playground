import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Sidebar from "./components/Sidebar";
import GoogleMaps from "./pages/GoogleMaps";
import OpenLayers from "./pages/OpenLayers";
import Mapbox from "./pages/Mapbox";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import CobaRedux from "./pages/CobaRedux";
import store from "./redux/store";
import { Provider } from "react-redux";

// const Sidebar = lazy(() => import("./components/Sidebar"));
// const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const Reports = lazy(() => import("./pages/Reports"));

const AppLayout = () => (
  <div className="container-map">
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
      {
        path: "/cobaredux",
        element: <CobaRedux />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
