import './App.css';

import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Beverages from './components/Beverages';
import Desserts from './components/Desserts';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
// import OrderHistory from './components/OrderHistory';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
         <Router>
        <div>
         
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/About" element={<About />} />
              {/* <Route path="/OrderHistory" element={<OrderHistory />} /> */}
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Beverages" element={<Beverages />} />
              <Route path="/Desserts" element={<Desserts />} />
              {/* <Route path="/success" element={<OrderComplete />} /> */}
            </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
