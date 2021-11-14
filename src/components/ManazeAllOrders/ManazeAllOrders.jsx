import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const ManazeAllOrders = () => {
  const [allOrders, setAllOrders] = React.useState([]);
  useEffect(() => {
    fetch("https://whispering-bayou-15079.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className="allOrdersSection">
      <h1>Client All Orders</h1>
      <div className="allOrders">
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Client Id </th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Product Name</th>
              <th>Product price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {allOrders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id}</td>
                <td>{order.clientName}</td>
                <td>{order.email}</td>
                <td>{order.productName}</td>
                <td>$ {order.price}</td>
                <td>{order.date}</td>
                <td>
                  <button className="btn btn-primary">Shipping</button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManazeAllOrders;
