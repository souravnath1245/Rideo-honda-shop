import React, {useEffect} from 'react';
import ".././pages.css"

const Review = () => {
    const [reviews, setReviews] = React.useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
        
    }, [])
    return (
        <div id="reviews" className="reviewSection">
            {
            reviews.map(item => <div key={item._id}>
                <p>{item.clientMessage}</p>
            </div>)
            }
        </div>
    );
};

export default Review;