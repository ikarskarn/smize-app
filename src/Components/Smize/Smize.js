import React from "react";
import "./Smize.css";
import "../../App.css";
import Slideshow from "../Slideshow/Slideshow";
import Context from "../../Context";

export default class Introduction extends React.Component {
    static contextType = Context;
    //determines what saying to show and which component is shown
    state = {
        choose: "Collecting the next Smize",
        slideshow: "hidden",
    };

    handleButtonClick = (id) => {
        //hides category selection
        //unhides sideshow
        this.setState({
            choose: "hidden",
            slideshow: "",
        });
        //sets current category id
        //begins countdown
        this.context.setCurrentCategory(id);
        this.context.setCount();
    };
    //hides slideshow
    //stops timer
    //unhides category selection
    handleBackButton = () => {
        this.context.stopCounting();
        this.setState({
            choose: "",
            slideshow: "hidden",
        });
    };
    render() {
        const categories = this.context.categories || [];
        const categoryOptions = categories.map((category) => {
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
                    <Slideshow handleBackButton={this.handleBackButton} />
                </div>
            </div>
        );
    }
}
