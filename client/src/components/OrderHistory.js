
import React, {useState} from "react";
import Login from './Login';

function OrderHistory () {

    const [token, setToken] = useState();
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