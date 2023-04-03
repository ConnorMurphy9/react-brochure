import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
 
     
        <header>
             <ul className="navbar">
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/Signup">Signup</Link>
                        </li>
                        <li>
                            <Link to ="/Menu">Menu</Link>
                        </li>
                        <li>
                            <Link to ="/Checkout">Checkout</Link>
                        </li>
                        <li>
                            <Link to ="/Beverages">Beverages</Link>
                        </li>
                        <li>
                            <Link to ="/Desserts">Desserts</Link>
                        </li>
                    

{/*<nav>{displayNav()}</nav> */}
            </ul>
            
        </header>
    
    )
}


export default Navbar;
