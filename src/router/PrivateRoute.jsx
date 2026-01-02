import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../component/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return (
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
