import React from "react";
import { Navigate } from "react-router-dom";
import isAdmin from "../util/isAdmin";

const PublicRoute = ({ children }) => {
  return !isAdmin() ? <Navigate to="/town" /> : children;
};

export default PublicRoute;
