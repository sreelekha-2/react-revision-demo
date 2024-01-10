import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header-container">
            <div className="">
                <h3>React Demo</h3>
            </div>
            <div>
                <ul className="nav-links">
                    <li className="nav-link"><Link to="/" className="link-text">Home</Link></li>
                    <li className="nav-link"><Link to="/about" className="link-text">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;