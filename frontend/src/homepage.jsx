// import './Homepage.css';
// import Location from './location';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();

    const buy_pen = () => {
       window.open("https://buy.stripe.com/test_14AdR9b5h2NPcBR5cQenS01")
    }

    return (
        <>
        Tester

        <button onClick={buy_pen}>
            Buy Toto's Pen
        </button>
        </>
    )
}

export default Homepage;