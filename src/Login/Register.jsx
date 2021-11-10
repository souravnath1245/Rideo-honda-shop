import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import useFirebase from "../hooks/useFirebase";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, userRegister, error } = useFirebase();

  const formGroup = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    userRegister(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <div style={formGroup} className="loginFormSection">
      <div className="registerForm">
        <form onSubmit={handleLoginSubmit}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="standard-basic"
            name="name"
            onBlur={handleOnBlur}
            label="You Name"
            variant="standard"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="standard-basic"
            name="email"
            onBlur={handleOnBlur}
            label="Email"
            variant="standard"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="standard-basic"
            name="password"
            onBlur={handleOnBlur}
            label="Password"
            variant="standard"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="standard-basic"
            name="password2"
            onBlur={handleOnBlur}
            label="Confirm Password"
            variant="standard"
          />
          <br />
          <button
            className="btn btn-primary my-4"
            style={{ width: "40%" }}
            type="submit"
          >
            Register
          </button>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <p className="text-primary" variant="text">
              Already Register? Please login.
            </p>
          </NavLink>
        </form>

        <NavLink style={{ textDecoration: "none" }} to="/home">
          <p className="my-4"> &lt; Back to home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
