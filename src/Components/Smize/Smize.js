import React from "react";
import "./Smize.css";
import "../../App.css";
import STORE from "../../STORE";
import Slideshow from "../Slideshow/Slideshow";
import Context from "../../Context";

export default class Introduction extends React.Component {
    static contextType = Context;
    state = {
        choose: "",
        slideshow: "hidden",
    };
    handleButtonClick = (id) => {
        console.log("ID: ", id);
        this.setState({
            choose: "hidden",
            slideshow: "",
        });
        this.context.setCurrentCategory(id);
        this.context.setCount();
    };
    render() {
        const categoryOptions = STORE.categories.map((category) => {
            return (
                <button
                    className={`category-button cat-${category.title}`}
                    key={`category-${category.id}`}
                    id={category.id}
                    value={category.id}
                    type="button"
                    onClick={() => this.handleButtonClick(category.id)}
                >
                    {category.title}
                </button>
            );
        });
        return (
            <div className="smize-page">
                <div className={`choose ${this.state.choose}`}>
                    <h1 className="smize-title">Smize for the Camera</h1>
                    <section className="pick-a-category">{categoryOptions}</section>
                </div>
                <div className={`slideshow ${this.state.slideshow}`}>
                    <Slideshow />
                </div>
            </div>
        );
    }
}
