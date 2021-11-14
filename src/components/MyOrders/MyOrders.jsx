import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./order.css"

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // https://whispering-bayou-15079.herokuapp.com
  useEffect(() => {
    fetch(`https://whispering-bayou-15079.herokuapp.com/bookingClient/client?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  return (
    <div className="orderSection">
      <div className="order">
        {orders.map((order) => (
            <div key={order._id}>
            <img src={order.productImage} alt="" />
              <h5><b>Product Name :</b>{order.productName}</h5>
            <h6><strong>Price :</strong> $ {order.price}</h6>
            <h6><strong>Client Name :</strong>  {order.clientName}</h6>
            <button className="btn btn-primary me-4">Shipping</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
