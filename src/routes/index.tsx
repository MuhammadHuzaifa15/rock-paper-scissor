import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "../components/Common";

import { routes } from "./routes";

const CustomRoutes = function () {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.key}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
