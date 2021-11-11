import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import "./buyproduct.css";
import useAuth from "./../../hooks/useAuth";

const BuyProduct = () => {
  const { user } = useAuth();
  const [singleProduct, setSingleProduct] = useState({});
  const [value, setValue] = React.useState(new Date());

  // const initialInfo = {
  //   clientName: user.displayName,
  //   email: user.email,
  //   phone: "",
  //   address: "",
  // };
  const [bookingInfo, setBookingInfo] = React.useState({});

  const date = value.toLocaleDateString();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  const name = singleProduct.name;
  // console.log(name);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(appointment)
    // send to the server
    fetch("http://localhost:5000/bookingProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      // .then((data) => {
      //   if (data.insertedId) {
      //     alert("Successfully Added");
      //     //   setBookingSuccess(true);
      //     //   handleBookingClose();
      //   }
      // });
      e.preventDefault()
  };

  return (
    <div>
      <p>{id}</p>
      <div className="singleProductSection">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={5}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={7}>
              <div className="productDetails">
                <div className="image">
                  <img
                    src={singleProduct.image}
                    alt="Client selected Product"
                    srcset=""
                  />
                </div>
                <div className="content">
                  <h1>{singleProduct.name}</h1>
                  <p>{singleProduct.details}</p>
                  <p>
                    <strong>Product Price</strong> $ {singleProduct.price}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div className="buyProductForm">
          <div className="formDevition">
          <Box >
            <form onSubmit={handleBookingSubmit}>
              <TextField
                sx={{ width: "90%" }}
                disabled
                id="standard-basic"
                name="Date"
                variant="standard"
                defaultValue={date}
                size="small"
              />
              <TextField
                sx={{ width: "90%" }}
                id="standard-basic"
                name="clientName"
                defaultValue={user.displayName}
                onBlur={handleOnBlur}
                variant="standard"
                size="small"
              />

              <TextField
                sx={{ width: "90%" }}
                id="standard-basic"
                name="email"
                variant="standard"
                defaultValue={user.email}
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "90%" }}
                id="standard-basic"
                name="address"
                onBlur={handleOnBlur}
                variant="standard"
                size="small"
              />
              <TextField
                sx={{ width: "90%" }}
                id="standard-basic"
                name="phone"
                onBlur={handleOnBlur}
                variant="standard"
                size="small"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
