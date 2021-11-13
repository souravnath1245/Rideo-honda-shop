import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  // const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://whispering-bayou-15079.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        // 'authorization': `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="text-center">
      <h2>Make an Admin</h2>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
