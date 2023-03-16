import React from "react";
import chicago from "../assets/chicago style pizza.jpg";
import veggie from "../assets/veggie pizza.jpg";
import meatlovers from "../assets/meat lover's pizza.jpg";
import Hawaiian from "../assets/hawaiian style pizza.jpg";

import { useState } from 'react';

function Menu () {
    const [number, setNumber] = useState(0);
    return (

    <div>
        <h1>Our Menu</h1>

        <section>Chicago Style Pizza
            <img className="chicago" src={chicago} alt="Chicago Style pizza"/>
            <h2>{number}</h2>
            <button onClick={() => {
            setNumber(number + 1);
            }}>+1</button>
        </section>
        
        <section>Veggie Pizza
            <img className="veggie" src={veggie} alt="Veggie Pizza"/>
        </section>
        
        <section>Meat Lover's
            <img className="meatlovers" src={meatlovers} alt="Meat Lover's Pizza"/>
        </section>

        <section>Hawaiian Style Pizza
            <img className="Hawaiian" src={Hawaiian} alt="Hawaiian Pizza"/>
        </section>
    
    </div>

    )
}
export default Menu