import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./review.css";

const Review = () => {
  const { user } = useAuth();
  const initialData = {
    clientName: user.displayName,
    email: user.email,
    rating: "",
    clientMessage: "",
  };
  const [reviewData, setReviewData] = React.useState(initialData);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewData };
    newInfo[field] = value;
    console.log(newInfo);
    setReviewData(newInfo);
  };

  const handleReviewSubmit = (e) => {
    // collect data
    const appointment = {
      ...reviewData,
    };
    console.log(appointment);
    // // send to the server
    fetch("https://whispering-bayou-15079.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks For Your  review..");
        }
      });
    // .finally(history.replace('/'))
    e.preventDefault();
  };

  return (
    <div className="text-center reviewSection">
      <div className="reviewForm">
        <div className="reviewDevition">
          <Box>
            <form onSubmit={handleReviewSubmit}>
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
                placeholder="Please type (1-5) to give me a rating "
                name="rating"
                type="number"
                onBlur={handleOnBlur}
                variant="standard"
                size="small"
              />
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                name="clientMessage"
                placeholder="Please Type Your Opinion."
                onBlur={handleOnBlur}
                style={{ width: "90%" }}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Review;
