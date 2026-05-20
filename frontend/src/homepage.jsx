// import './Homepage.css';
// import Location from './location';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css';

function Homepage() {
    const navigate = useNavigate();
    const [email_confirmation, set_email_confirmation] = useState(false); 

    const test_api = async () => {
        const response = await fetch('https://api.psplanet.store/api/test');
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
        
        const response = await fetch('https://api.psplanet.store/api/contact', 
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
    <div className="banner">
        <p className="banner-text">Planet Penspinning</p>
    </div>

    <div className="content">
        <button onClick={buy_pen}>Buy Toto's Pen</button>
        <button onClick={test_api}>Test Backend</button>

        <p className="contact-title">Contact Us</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">Full Name</label>
                <input type="text" placeholder="Your Name" id="fname" required />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="example@gmail.com" id="email" required />
            </div>
            <div>
                <label htmlFor="content">Inquiry</label>
                <input type="text" placeholder="Your message..." id="content" required />
            </div>
            <div>
                <input type="submit" value="Send Message" />
            </div>
        </form>
        {email_confirmation && (
            <p className="success-msg">✓ Sent! Check your email for confirmation.</p>
        )}
    </div>
    </>
)
}

export default Homepage;