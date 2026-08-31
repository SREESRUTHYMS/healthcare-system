import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Wrap any dashboard route in this. Pass `role` to restrict it further,
// e.g. <ProtectedRoute role="doctor"><DoctorDashboard /></ProtectedRoute>
export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
}
