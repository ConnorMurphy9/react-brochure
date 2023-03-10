import './App.css';

// import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Beverages from './components/Beverages';
import Desserts from './components/Desserts';
import Menu from './components/Menu';
import Sides from './components/Sides';
// import OrderHistory from './components/OrderHistory';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
         <Router>
        <div>
         
            <Navbar />
            
            {/* <Provider store={store}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} /> */}
              <Route path="/About" element={<About />} />
              {/* <Route path="/OrderHistory" element={<OrderHistory />} /> */}
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Sides" element={<Sides />} />
              <Route path="/Beverages" element={<Beverages />} />
              <Route path="/Desserts" element={<Desserts />} />
              
              {/* <Route path="/success" element={<OrderComplete />} /> */}
            </Routes>
          
          {/* </Provider> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
