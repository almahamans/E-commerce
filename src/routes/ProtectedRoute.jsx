import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== requiredRole) {
    return <Navigate to="/signin" replace />
  }
    return <Outlet replace/>
};
