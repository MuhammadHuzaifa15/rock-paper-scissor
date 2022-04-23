import React from "react";
import { Home, NotFound } from "../pages";

export const routes = [
  { path: "/", component: <Home />, key: "home" },
  { path: "*", component: <NotFound />, key: "not-found" },
];
