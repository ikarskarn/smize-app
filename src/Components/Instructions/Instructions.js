import React from "react";
import Context from "../../Context";
import "./Instructions.css";
import { Link } from "react-router-dom";

class Instructions extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div>
                <h1>Smize</h1>
                <section className="instructions-section">
                    <h2>Smile With Your Eyes</h2>
                    <p>
                        This app is intended for Photographers that need a little extra push
                        convincing their subjects to provide a natural smile.
                    </p>
                    <h2>Instructions</h2>
                    <p>
                        Simply click the "Smize for the Camera" button, pick a category, and just
                        read what you see. Smize is A collection of sayings, jokes, and light
                        encouragement that will help you convince your subjects to smile naturally
                        for the best photos.
                    </p>
                    <Link
                        to="/smize"
                        onClick={() => this.context.setCurrentPage("smize", true)}
                        className="smize-button"
                    >
                        Smize for the Camera
                    </Link>
                </section>
            </div>
        );
    }
}

export default Instructions;
