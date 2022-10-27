import React, { useContext } from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import Context from "../store/Cart-Context";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Header = () => {
  const ctx = useContext(Context);
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  const logOutHandler = () => {
    navigate("/");
    auth.logout();
  };
  return (
    <div className={classes.header}>
      <NavLink to={""}>HOME</NavLink>
      <NavLink to={"/store"}>STORE</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      {!auth.isLoggedin ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <button onClick={logOutHandler}>LogOut</button>
      )}
      <Button>Cart</Button>
      <span>{ctx.totalAmount}</span>
    </div>
  );
};

export default Header;
