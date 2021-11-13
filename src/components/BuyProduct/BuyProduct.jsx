import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
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
  const { id } = useParams();
  const date = value.toLocaleDateString();

  const history = useHistory();

  const initialInfo = {
    clientName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };
  const [bookingInfo, setBookingInfo] = React.useState(initialInfo);

  useEffect(() => {
    fetch(`https://whispering-bayou-15079.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

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
      productName: singleProduct.name,
      price: singleProduct.price,
      productImage : singleProduct.image,
      date,
    };
    console.log(appointment);
    // send to the server
    fetch("https://whispering-bayou-15079.herokuapp.com/bookingClient", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Added");
          history.replace("/");
        }
      });
    // .finally(history.replace('/'))
    e.preventDefault();
  };

  return (
    <div>
      <div className="singleProductSection">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container sx={{alignItmes:"center "}} className="product2Section" spacing={2}>
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
                <div className="productContent">
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
            <Box>
              <form onSubmit={handleBookingSubmit}>
                <TextField
                  sx={{ width: "90%" ,fontSize: "30px", mb:2 }}
                  id="standard-basic"
                  name="Date"
                  variant="standard"
                  defaultValue={date}
                  size="small"
                />
                <TextField
                  sx={{ width: "90%",fontSize: "30px", mb:2 }}
                  id="standard-basic"
                  name="clientName"
                  defaultValue={user.displayName}
                  onBlur={handleOnBlur}
                  variant="standard"
                  size="small"
                />

                <TextField
                  sx={{ width: "90%",fontSize: "30px", mb:2 }}
                  id="standard-basic"
                  name="email"
                  variant="standard"
                  defaultValue={user.email}
                  onBlur={handleOnBlur}
                  size="small"
                />
                <TextField
                  sx={{ width: "90%" ,fontSize: "30px", mb:2 }}
                  id="standard-basic"
                  name="address"
                  onBlur={handleOnBlur}
                  variant="standard"
                  size="small"
                />
                <TextField
                  sx={{ width: "90%" ,fontSize: "30px", mb:2}}
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
