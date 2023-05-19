import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<PrivateRoute auth={false}>{<LoginPage />}</PrivateRoute>} />
      <Route path="/" element={<PrivateRoute auth={true}>{<Home />}</PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
