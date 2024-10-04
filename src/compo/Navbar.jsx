import React from 'react';
import './Home.css'
function Navbar(props) {
    return (
        <>
        <nav className="navbar">
        <div className="logo">
            <h1>Navbar</h1>
        </div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/index">index</a>
                </div>
    </nav>
    </>
    );
}

export default Navbar;