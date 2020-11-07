import React from "react";
import Context from "../../Context";
import "./Slideshow.css";

export default class Slideshow extends React.Component {
    static contextType = Context;

    componentDidMount() {
        let rnd = Math.floor(Math.random() * Math.floor(this.context.sayings.length));
        //get random saying
        const str = this.context.sayings[rnd].content;
        this.context.setCurrentSaying(str);
    }

    render() {
        return (
            <div className="slideshow-page">
                <button
                    onClick={() => this.context.handleTimer(this.context.timer)}
                    className="timer"
                    type="button"
                >
                    {`${this.context.timer} SEC`}
                </button>
                <h1 className="slideshow-text">{this.context.currentSaying}</h1>
                <button type="button">Go Back</button>
            </div>
        );
    }
}
