import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="content" aria-live="polite">
            <nav role="navigation" className="nav-bar black">
                <Link to="/" className="nav nav-home selected">
                    Home
                </Link>
                <Link to="/smize" className="nav nav-smize">
                    Smize
                </Link>
                <Link to="/share" className="nav nav-share">
                    Smize Share
                </Link>
            </nav>
        </div>
    );
}
