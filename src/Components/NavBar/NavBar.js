import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Context from "../../Context";

export default class NavBar extends React.Component {
    static contextType = Context;
    state = {
        home: this.context.currentPage === "home" ? "nav nav-home selected" : "nav nav-home",
        smize: "nav nav-smize",
        share: "nav nav-share",
    };

    render() {
        return (
            <nav role="navigation" className="nav-bar black">
                <Link
                    onClick={() => this.context.setCurrentPage("home", false)}
                    to="/"
                    className={
                        this.context.currentPage === "home"
                            ? "nav nav-home selected"
                            : "nav nav-home"
                    }
                >
                    Home
                </Link>
                <Link
                    onClick={() => this.context.setCurrentPage("smize", true)}
                    to="/smize"
                    className={
                        this.context.currentPage === "smize"
                            ? "nav nav-smize selected"
                            : "nav nav-smize"
                    }
                >
                    Smize
                </Link>
                <Link
                    onClick={() => this.context.setCurrentPage("share", false)}
                    to="/share"
                    className={
                        this.context.currentPage === "share"
                            ? "nav nav-share selected"
                            : "nav nav-share"
                    }
                >
                    Smize Share
                </Link>
            </nav>
        );
    }
}
