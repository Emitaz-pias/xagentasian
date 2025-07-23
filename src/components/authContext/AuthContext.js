import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));

  const login = (id) => {
    localStorage.setItem("userId", id);
    setUserId(id);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
  };

  useEffect(() => {
    const onStorageChange = () => {
      const storedUser = localStorage.getItem("userId");
      setUserId(storedUser);
    };

    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId,login, logout, isLoggedIn: !!userId }}>
      {children}
    </AuthContext.Provider>
  );
};
