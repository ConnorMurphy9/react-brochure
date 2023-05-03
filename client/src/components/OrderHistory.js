// import React, { useState, useEffect } from "react";

// function OrderHistory() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Make a request to your API to fetch the order history for the currently logged-in user
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Order History</h2>
//       {orders.map((order) => (
//         <div key={order.id}>
//           <p>{order.pizzaName}</p>
//           <p>{order.createdAt}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default OrderHistory;

// OrderHistory.js

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      axios.get(`/api/orders/user/${user.uid}`)
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id}>
          <p>Pizza: {order.pizza.name}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
