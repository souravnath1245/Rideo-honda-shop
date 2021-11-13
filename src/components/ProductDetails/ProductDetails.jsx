import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Navlink from './../../Shared/Navlink';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://whispering-bayou-15079.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddItems = (id) => {
    console.log(id);
  };
  return (
    <div className="productManageSection">
      <Navlink/>
      <Link to="/">
        <p className=" text-uppercase " style={{fontWeight: 800 ,}}>&lt; Home</p>
        </Link>
      <div className="productDetailsSection">
        {products.map((item) => (
          <div className="productCard">
            <Card style={{ width: "23rem" }}>
              <Card.Text className="text-center">
                2021-MANUAL-PETROL-270 CC
              </Card.Text>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className="special">
                  <span>
                    <Rating
                      className="rating"
                      initialRating={item.rating}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      readonly
                    />
                  </span>
                  <span>
                    <strong>${item.price}</strong>
                  </span>
                </div>
                <Card.Text>{item.details}</Card.Text>
                <Link to={`products/${item._id}`}>
                  <Button
                    onClick={() => handleAddItems(item._id)}
                    variant="primary"
                  >
                    Add To Cart
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
