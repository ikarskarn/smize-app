import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <main className="App">
                <div className="content" aria-live="polite">
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
                </div>
                <header className="introduction">
                    <h1>Smize</h1>
                    <p>
                        Smize: To Smile with your Eyes. This app allows is intended for
                        Photographers that need a little extra push convincing their subjects to
                        provide a natural smile.
                    </p>
                </header>
                <section className="instructions-section lgrey">
                    <h2>Instructions</h2>
                    <p>
                        Simple click the "Smize for the Camera" button, pick a category, and just
                        read what you see. A collection of sayings, jokes, and light encouragement
                        will help you convince your subjects to smile naturally for the best photos.
                    </p>
                    <Link to="/smize" className="smize-button">
                        Smize for the Camera
                    </Link>
                </section>
            </main>
        );
    }
}

export default App;
