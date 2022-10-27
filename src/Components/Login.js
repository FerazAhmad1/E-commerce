import React, { useRef, useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import classes from "./Login.module.css";

const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  const [login, setLogin] = useState(false);
  useEffect(function () {
    if (localStorage.getItem("token")) {
      auth.login(localStorage.getItem("token"));
      navigate("/store");
    }
  }, []);
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log();
    const enterEmail = emailRef.current.value;
    const enterPassword = passwordRef.current.value;
    emailRef.current.value = passwordRef.current.value = "";

    const user = {
      email: enterEmail,
      password: enterPassword,
      returnSecureToken: true,
    };
    if (!login) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyBY2ZOld6RQzrDfu1fT3pIBE-Jm5Y1icyU",
          {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("yes");
        console.log(response);
        const data = await response.json();
        if (response.ok) {
          console.log(data.idToken);
          auth.login(data.idToken);
          console.log(auth);
          navigate("/store");
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(user.passsword);
      console.log(user);
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY2ZOld6RQzrDfu1fT3pIBE-Jm5Y1icyU",
          {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        const data = await response.json();
        if (response.ok) {
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const modeHandler = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div className={classes.login}>
      <form onSubmit={loginHandler}>
        <div>
          <label>E-mail</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" ref={passwordRef} />
        </div>

        <button onClick={modeHandler}>{login ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default Login;
