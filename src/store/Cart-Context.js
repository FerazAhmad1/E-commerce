import React, { createContext } from "react";
import ReactDOM from "react-dom";

const Context = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  login: () => {},
  logout: () => {},
  isLoggedin: false,
});
export default Context;
