// import './Homepage.css';
// import Location from './location';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    const [email_confirmation, set_email_confirmation] = useState(false); 

    const test_api = async () => {
        const response = await fetch("http://54.242.226.47:5555/api/test");
        const data = await response.text();
        console.log(data)
    }
    const buy_pen = () => {
       window.open("https://buy.stripe.com/test_14AdR9b5h2NPcBR5cQenS01")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = 
            {
                fname: e.target.fname.value,
                email: e.target.email.value,
                content: e.target.content.value,
            };
        
        const response = await fetch('http://54.242.226.47:5555/api/contact', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

        if (response.ok) {
            set_email_confirmation(true)
        }
    }

    return (
        <>
        Tester

        <p> new Push</p>

        <p>newest push</p>

        <button onClick={buy_pen}>
            Buy Toto's Pen
        </button>

        <button onClick={test_api}>
            Test Backend
        </button>

        <p>Contact Us</p>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="fname">Full Name: </label>
                    <input type="text" placeholder="Your Name" id="fname" required></input>
                </div>
                <div>
                    <label for="email">Email Address: </label>
                    <input type="email" placeholder="example@gmail.com" id="email" required></input>
                </div>

                <div>
                     <label for="content">Inquiry: </label>
                    <input type="text" placeholder="Your Inquiries" id="content" required></input>
                </div>

                <div>
                    <input type="submit"></input>
                </div>

            </form>
            {email_confirmation && (
                <p>Successful, please check your email for confirmation</p>
            )}
        </div>
        </>
    )
}

export default Homepage;