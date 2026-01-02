import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../component/Loader";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  if (loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
