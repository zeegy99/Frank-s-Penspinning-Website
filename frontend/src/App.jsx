
// import './App.css';
// import Location from './location';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "./homepage";
// import Signin from "./signin/signin";
// import Signup from "./signin/signup";
// import Swiper from "./swiper_homepage";
// import Pickup from "./awaiting_pickup";

// import { useNavigate, Link } from "react-router-dom"

function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
