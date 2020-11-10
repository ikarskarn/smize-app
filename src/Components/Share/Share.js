import React from "react";
import Context from "../../Context";
import "./Share.css";
import CategorySection from "./CategorySection";

class Share extends React.Component {
    static contextType = Context;
    state = {
        showForm: false,
        formToShow: 1,
    };
    handleShowForm = (show, num) => {
        this.setState({ showForm: show, formToShow: num });
    };
    render() {
        const categories = this.context.categories || [];
        const sayings = this.context.sayings || [];

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
