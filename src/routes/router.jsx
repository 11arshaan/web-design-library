import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ErrorRoute from "./ErrorRoute";
import { SVGRoute } from "./SVGRoute";
import { D3Route } from "./D3Route";
import ThreeRoute from "./ThreeRoute";
import LayoutRoute from "./LayoutRoute";
import UtilityRoute from "./UtilityRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      { path: "layout", element: <LayoutRoute /> },
      { path: "utility", element: <UtilityRoute /> },
      { path: "svg", element: <SVGRoute /> },
      { path: "d3", element: <D3Route /> },
      { path: "three", element: <ThreeRoute /> },
    ],
  },
]);

export default router;
