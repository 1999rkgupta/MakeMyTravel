import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Apis/AuthContextApi";

let ProtectedRoute = ({ children }) => {
  let { isLoading, authUser } = useContext(AuthContext);
  if (
    (isLoading === true && authUser.accessToken) ||
    window.sessionStorage.getItem("token")
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
