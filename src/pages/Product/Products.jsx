import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import ".././pages.css";

const Products = () => {
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
    <div id="products" className="productSection">
      {products.slice(0, 6).map((product) => (
        <div className="productCard">
          <Card style={{ width: "23rem" }}>
            <Card.Text className="text-center">
              2021-MANUAL-PETROL-270 CC
            </Card.Text>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <div className="special">
                <span>
                  <Rating
                    className="rating"
                    initialRating={product.rating}
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly
                  />
                </span>
                <span>
                  <strong>${product.price}</strong>
                </span>
              </div>
              <Card.Text>{product.details.slice(0,100)}</Card.Text>
              <Link to={`products/${product._id}`}>
                <Button
                  onClick={() => handleAddItems(product._id)}
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
  );
};

export default Products;
