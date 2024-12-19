import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h1>About Us</h1>
            <p>
                Welcome to our News Website! We bring you the latest news from around the world, covering categories like politics,
                entertainment, sports, and more. Stay updated with our reliable and fast news service.
            </p>
            <h2>Contact Information</h2>
            <ul>
                <li>Email: contact@newswebsite.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 News Avenue, Media City, NY 10001, USA</li>
                <li>Follow us on:
                    <ul>
                        <li>Facebook: <a href="https://facebook.com/newswebsite" target="_blank" rel="noopener noreferrer">facebook.com/newswebsite</a></li>
                        <li>Twitter: <a href="https://twitter.com/newswebsite" target="_blank" rel="noopener noreferrer">@newswebsite</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default About;
