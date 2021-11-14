import { useState, useEffect } from "react";
import * as React from "react";
import "./manageProduct.css";
import { Table } from "react-bootstrap";

const ManazeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://whispering-bayou-15079.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductDelete = (id) => {
    fetch(`https://whispering-bayou-15079.herokuapp.com/allProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Successfully Deleted...");

          const remainingUsers = products.filter((p) => p._id !== id);
          setProducts(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center">WebSite All Products ...</h1>
      <div className="allProductSection">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Rating</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.rating}</td>
                <td>$ {product.price}</td>
                <td>
                  <button
                    onClick={() => handleProductDelete(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManazeProducts;
