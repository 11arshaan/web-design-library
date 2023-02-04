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





const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorRoute /> },
  { path: "svg", element: <SVGRoute /> },
  { path: "d3", element: <D3Route />},
]);





export default router;
