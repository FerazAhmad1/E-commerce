import React, { useContext, useState } from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const userLoggedin = !!token;
  console.log(userLoggedin);
  const login = (token) => {
    setToken(token);
  };
  const logOut = () => {
    setToken(null);
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
