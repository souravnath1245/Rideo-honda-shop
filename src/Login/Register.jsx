import { Alert, TextField, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.css";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
   const history =useHistory()

  const { user, isLoading, userRegister, error } = useAuth();

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
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    userRegister(loginData.email, loginData.password , loginData.name,history );
    e.preventDefault();
  };

  return (
    <div style={formGroup} className="loginFormSection">
      <div className="registerForm">
        {!isLoading && (
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
              type="password"
              onBlur={handleOnBlur}
              label="Password"
              variant="standard"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="standard-basic"
              name="password2"
              type="password"
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
        )}
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
        {error && <Alert severity="error">{error}</Alert>}

        <NavLink style={{ textDecoration: "none" }} to="/home">
          <p className="my-4"> &lt; Back to home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
