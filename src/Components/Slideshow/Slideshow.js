import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Slideshow";

export default class Slideshow extends React.Component {
    render() {
        return (
            <div className="slideshow">
                <nav role="navigation" className="nav-bar black">
                    <Link to="/" className="nav nav-home">
                        Instructions
                    </Link>
                    <Link to="/smize" className="nav nav-smize">
                        Smize
                    </Link>
                    <Link to="/share" className="nav nav-share">
                        Share Your Own
                    </Link>
                </nav>
                <button type="button">5 SEC</button>
                <h1 className="slideshow-text">
                    I'm going to try to say funny things to make someone smile
                </h1>
                <button type="button">Go Back</button>
            </div>
        );
    }
}
