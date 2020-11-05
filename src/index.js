import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Smize from "./Components/Smize/Smize";
import Slideshow from "./Components/Slideshow/Slideshow";

ReactDOM.render(
    <BrowserRouter>
        <Slideshow />
    </BrowserRouter>,
    document.getElementById("root")
);
