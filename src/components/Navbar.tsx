import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/path/to/logo.png" alt="Logo" />
                </Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login" className="auth-button">Login</Link>
                <Link to="/signup" className="auth-button">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
