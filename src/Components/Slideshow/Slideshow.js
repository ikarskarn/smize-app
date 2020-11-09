import React from "react";
import Context from "../../Context";
import "./Slideshow.css";

export default class Slideshow extends React.Component {
    static contextType = Context;

    componentDidMount() {
        const store = [] || this.context;
        const sayings = [] || store.sayings;
        let rnd = Math.floor(Math.random() * Math.floor(sayings.length));
        //get random saying
        const str = [] || sayings[rnd].content;
        [] || store.setCurrentSaying(str);
    }

    render() {
        return (
            <div className="slideshow-page">
                <div className="btn-timer">
                    <button
                        onClick={() => this.context.handleTimer(this.context.timer)}
                        className="timer"
                        type="button"
                    >
                        {`${this.context.seconds} SEC`}
                    </button>
                </div>
                <p className="click-increase">Click to Increase</p>
                <h1 className="slideshow-text">{this.context.currentSaying}</h1>
                <button
                    className="back-button"
                    type="button"
                    onClick={() => this.props.handleBackButton()}
                >
                    Go Back
                </button>
            </div>
        );
    }
}
