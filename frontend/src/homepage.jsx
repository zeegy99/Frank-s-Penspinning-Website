// import './Homepage.css';
// import Location from './location';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();

    const test_api = async () => {
        const response = await fetch("http://localhost:5555/api/test");
        const data = await response.text();
        console.log(data)
    }
    const buy_pen = () => {
       window.open("https://buy.stripe.com/test_14AdR9b5h2NPcBR5cQenS01")
    }

    return (
        <>
        Tester

        <p> new Push</p>

        <button onClick={buy_pen}>
            Buy Toto's Pen
        </button>

        <button onClick={test_api}>
            Test Backend
        </button>
        </>
    )
}

export default Homepage;