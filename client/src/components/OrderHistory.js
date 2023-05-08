// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import axios from 'axios';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const user = firebase.auth().currentUser;
//     if (user) {
//       axios.get(`/api/orders/user/${user.uid}`)
//         .then(response => {
//           setOrders(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Order History</h2>
//       {orders.map(order => (
//         <div key={order.id}>
//           <p>Pizza: {order.pizza.name}</p>
//           <p>Quantity: {order.quantity}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderHistory;

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getOrderHistory } from '../api/orders';
import OrderPizza from '../models/OrderPizza';

const OrderHistory = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getOrderHistory(currentUser.uid).then((data) => {
        setOrders(data);
      });
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div>
        <p>Please log in to view your order history.</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div>
        <p>You have not placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <OrderPizza key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderHistory;
