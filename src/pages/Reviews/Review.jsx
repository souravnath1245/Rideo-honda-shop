import React, { useEffect } from "react";
import Rating from "react-rating";
import ".././pages.css";

const Review = () => {
  const [reviews, setReviews] = React.useState([]);
  useEffect(() => {
    fetch("https://whispering-bayou-15079.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="sectionReview">
      <div className="reviewHeader">
        <h1 className="text-center text-primary py-4">Review Section</h1>
      </div>
      <div id="reviews" className="review2Section">
        {reviews.slice(0, 6).map((item) => (
          <div key={item._id} className="reviewContent text-center">
            <h1>{item.clientName}</h1>
            <span>
              <Rating
                className="rating"
                initialRating={item.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
            </span>
            <p>{item.clientMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
