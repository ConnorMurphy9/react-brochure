import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <>
     
        <header>
             <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/Entrees">Entrees</Link>
                        </li>
                        <li>
                            <Link to ="/Sides">Sides</Link>
                        </li>
                        <li>
                            <Link to ="/Beverages">Beverages</Link>
                        </li>
                        <li>
                            <Link to ="/Desserts">Desserts</Link>
                        </li>
                        <li>
                            <Link to ="/Entrees">Entrees</Link>
                        </li>

{/*<nav>{displayNav()}</nav> */}
            </ul>
            
        </header>
     </>
    )
}


export default Navbar;
