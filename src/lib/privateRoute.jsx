import React from "react";
import { Navigate } from "react-router-dom";
import isAdmin from "../util/isAdmin";

const PrivateRoute = ({ children }) => {
  // return !isAdmin() ? <Navigate to="/login" /> : children;
  return children
};

export default PrivateRoute;
