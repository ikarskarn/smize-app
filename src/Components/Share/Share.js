import React from "react";
import Context from "../../Context";
import "./Share.css";
import CategorySection from "./CategorySection";

class Share extends React.Component {
    static contextType = Context;
    //determine form visibility
    state = {
        showForm: false,
        formToShow: 1,
    };
    //shows or hides form
    //determines which form under which category to display
    handleShowForm = (show, num) => {
        this.setState({ showForm: show, formToShow: num });
    };
    render() {
        //simplifies categories and sayings
        const categories = this.context.categories || [];
        const sayings = this.context.sayings || [];
        //sort and display sayings by category
        return (
            <div className="share-page">
                <h1 className="share-title">Share Your Own</h1>
                {categories.map((category) => (
                    <CategorySection
                        key={`category-${category.id}`}
                        id={category.id}
                        title={category.title}
                        handleShowForm={this.handleShowForm}
                        show={this.state.showForm}
                        sayings={sayings
                            .filter((saying) => category.id === saying.category_id)
                            .map((saying) => saying)}
                        formToShow={this.state.formToShow}
                    ></CategorySection>
                ))}
            </div>
        );
    }
}

export default Share;
