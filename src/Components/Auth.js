import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userLoggedin = !!token;
  console.log(userLoggedin);
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const contextValue = {
    isLoggedin: userLoggedin,
    login: login,
    logout: logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
