import React, { createContext, useContext, useState } from "react";

// This is a MOCK auth context so the frontend is fully clickable on its own.
// Swap `login`/`register`/`logout` below for real calls to your Express/MongoDB
// API (e.g. POST /api/auth/login) once the backend is ready.

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("vitals_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = ({ email, role }) => {
    const mockUser = { name: email.split("@")[0], email, role };
    localStorage.setItem("vitals_user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const register = ({ name, email, role }) => {
    const mockUser = { name, email, role };
    localStorage.setItem("vitals_user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem("vitals_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
