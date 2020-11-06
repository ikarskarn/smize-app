import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Instructions from "./Components/Instructions/Instructions";
import BackgroundVideo from "./Videos/backgroundVideo.mp4";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <main className="App">
                <NavBar />
                <video className="background-video" autoPlay loop muted>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
                <div className="cover" />
                <Instructions />
                <Footer />
            </main>
        );
    }
}

export default App;
