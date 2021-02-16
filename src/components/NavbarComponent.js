import React from 'react';
import './Components.css';

function Navbar() {
    return (
        <div className="Nav-header">
            <ul className="Nav">
                <li className="navbar"><a href="#main">Home</a></li>
                <li className="navbar"><a href="#project">Project</a></li>
                <li className="navbar"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar;