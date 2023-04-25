
import React, {useState} from "react";
import Login from './Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function OrderHistory () {

  const token = getToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
    return (
        
    <div>
        <h1>Order History</h1>
        






    </div>
        
        
        )
    }

    export default OrderHistory