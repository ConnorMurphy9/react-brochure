import React from "react";
import chicago from "../assets/chicago style pizza.jpg";
import veggie from "../assets/veggie pizza.jpg";
import meatlovers from "../assets/meat lover's pizza.jpg";
import Hawaiian from "../assets/hawaiian style pizza.jpg";



function Menu () {

    return (

    <div>
        <h1>Our Menu</h1>

        <section>Chicago Style Pizza
            <img className="chicago" src={chicago} alt="Chicago Style pizza"/>
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