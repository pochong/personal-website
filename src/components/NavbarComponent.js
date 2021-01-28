import React from 'react';
import './Components.css';

function Navbar() {
    return (
        <div className="Nav-header">
            <ul className="Nav">
                <li className="navbar"><a>Home</a></li>
                <li className="navbar"><a>Project</a></li>
                <li className="navbar"><a>About</a></li>
            </ul>
        </div>
    );
}
export default Navbar;