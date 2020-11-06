import React from "react";
import "./Instructions.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

class Instructions extends React.Component {
    render() {
        return (
            <div>
                <header className="introduction">
                    <h1>Smize</h1>
                </header>
                <section className="instructions-section">
                    <h2>Smile With Your Eyes</h2>
                    <p>
                        This app is intended for Photographers that need a little extra push
                        convincing their subjects to provide a natural smile.
                    </p>
                    <h2>Instructions</h2>
                    <p>
                        Simply click the "Smize for the Camera" button, pick a category, and just
                        read what you see. A collection of sayings, jokes, and light encouragement
                        will help you convince your subjects to smile naturally for the best photos.
                    </p>
                    <a href="/smize" className="smize-button">
                        Smize for the Camera
                    </a>
                </section>
            </div>
        );
    }
}

export default Instructions;
