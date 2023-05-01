// import React from "react";
// import chicago from "../assets/chicago style pizza.jpg";
// import veggie from "../assets/veggie pizza.jpg";
// import meatlovers from "../assets/meat lover's pizza.jpg";
// import Hawaiian from "../assets/hawaiian style pizza.jpg";

// import { useState } from 'react';

// function Menu () {
//     const [number, setNumber] = useState(0);
//     return (

//     <div className="shop">
//         <div className="shopTitle">
//             <h1>Our Menu</h1>
//         </div>
//         <div className="products">
//             <div>Chicago Style Pizza
//                 <img className="chicago" src={chicago} alt="Chicago Style pizza"/>
//                 <h2>{number}</h2>
//                 <button onClick={() => {
//                 setNumber(number + 1);
//                 }}>+1</button>
//             </div>
        
//             <div>Veggie Pizza
//                 <img className="veggie" src={veggie} alt="Veggie Pizza"/>
//             </div>
        
//             <div>Meat Lover's
//                 <img className="meatlovers" src={meatlovers} alt="Meat Lover's Pizza"/>
//             </div>

//             <div>Hawaiian Style Pizza
//                 <img className="Hawaiian" src={Hawaiian} alt="Hawaiian Pizza"/>
//             </div>
//         </div>            
//     </div>

//     )
// }
// export default Menu

import React, { useState, useEffect } from 'react';

function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {pizzas.map(pizza => (
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <p>${pizza.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
