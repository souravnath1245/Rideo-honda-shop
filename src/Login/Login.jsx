import { Alert, Grid, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./login.css";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, userLogIn, isLoading, signInWithGoogle, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const formGroup = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    userLogIn(loginData.email, loginData.password , location, history);
    console.log(loginData);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div style={formGroup} className="loginFormSection">
      <div className="loginForm">
        <Typography variant="body1" gutterBottom>
          Login
        </Typography>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            {user?.email? (
              <Alert severity="success">Login Successfully!</Alert>) : ( <Alert severity="error">{error}</Alert>
            )}
            {/* {error && <Alert severity="error">{error}</Alert>} */}
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="standard-basic"
              name="email"
              onChange={handleOnChange}
              label="Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="standard-basic"
              name="password"
              type="password"
              onChange={handleOnChange}
              label="Password"
              variant="standard"
            />
            <br />
            <button
              className="btn btn-primary my-4"
              style={{ width: "40%" }}
              type="submit"
            >
              Login
            </button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <p className="text-primary" variant="text">
                New User? Please Register
              </p>
            </NavLink>
          </form>
        )}
        <p className="text-primary">
          &lt;-----------------------Or Login---------------------------&gt;
        </p>
        <div className="button w-100 ">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary mx-auto "
          >
            <GoogleIcon text="primary" sx={{ mr: 2 }} />
            Google Login
          </button>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <p className="my-4"> &lt; Back to home</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
