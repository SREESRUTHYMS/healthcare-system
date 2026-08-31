import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatAssistant from "./components/ChatAssistant.jsx";
import Home from "./pages/Home.jsx";
import TrackingOverview from "./pages/TrackingOverview.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import IndicatorDetail from "./pages/IndicatorDetail.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/dashboards/AdminDashboard.jsx";
import DoctorDashboard from "./pages/dashboards/DoctorDashboard.jsx";
import PatientDashboard from "./pages/dashboards/PatientDashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<TrackingOverview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:categorySlug/:indicatorSlug" element={<IndicatorDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor"
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient"
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
