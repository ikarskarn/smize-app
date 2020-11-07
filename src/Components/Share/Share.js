import React from "react";
import Context from "../../Context";
import "./Share.css";
import CategorySection from "./CategorySection";

class Share extends React.Component {
    static contextType = Context;

    render() {
        const categories = this.context.categories || [];
        const sayings = this.context.sayings || [];
        console.log("Sayings: ", sayings);
        return (
            <div className="share-page">
                <h1 className="share-title">Share Your Own</h1>
                {categories.map((category) => (
                    <CategorySection
                        key={`category-${category.id}`}
                        id={category.id}
                        title={category.title}
                        sayings={sayings
                            .filter((saying) => category.id === saying.category_id)
                            .map((saying) => saying)}
                    ></CategorySection>
                ))}
            </div>
        );
    }
}

export default Share;
