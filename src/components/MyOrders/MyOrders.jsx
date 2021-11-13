import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  // https://whispering-bayou-15079.herokuapp.com
  useEffect(() => {
    const url = `https://whispering-bayou-15079.herokuapp.com/bookingClient?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    
  }, [user.email]);
  return (
    <div className="OrderSection">
      <h1>sourav</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>{order.productName}</p>
          <h1> sourav kuamar nath</h1>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
