import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = firebase.auth().currentUser;
      const ordersRef = firebase.firestore().collection("orders");
      const snapshot = await ordersRef.where("user_id", "==", user.uid).get();
      const fetchedOrders = snapshot.docs.map((doc) => doc.data());
      setOrders(fetchedOrders);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h3>{order.pizza_name}</h3>
            <p>{order.date.toDate().toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
