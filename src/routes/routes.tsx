import React from "react";
import { Home, Room, NotFound } from "../pages";

export const routes = [
  { path: "/", component: <Home />, key: "home" },
  { path: "/room", component: <Room />, key: "room" },
  { path: "*", component: <NotFound />, key: "not-found" },
];
