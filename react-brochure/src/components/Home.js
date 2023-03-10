import React from "react";
import background from "../assets/brick-wall-with-chairs.jpg";
function Home () {

    return (
        <div>
            <h1>Home</h1>

            <div className="bg-img" style={{ backgroundImage: `url(${background})`}}>
                Welcome to Connor's Pizzeria
            </div>
            
        </div>
        )
    }

    export default Home