import React from "react";
import "./CategorySection.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategorySection(props) {
    //set sayings to map over
    const sayings = props.sayings || [];
    console.log("Saying Prop: ", sayings);
    //show categories with at least one saying
    //filter sayings by category and pass prop values to saying content component
    return (
        <section className={`rel category-section ${sayings.length > 0 ? "" : "hidden"}`}>
            <div className="category-title">
                <header id={props.id} className={`category-header`}>
                    <div className="add-to-section">
                        <h2>{props.title}</h2>
                        <button className="add-button">
                            <span className="button-text">Add</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </header>
            </div>

            <div className="list-sayings">
                {sayings.map((saying) => (
                    <div className="delete-from-section">
                        <p className="saying-text" key={`saying-${saying.id}`}>
                            {saying.content}{" "}
                        </p>
                        <button className="delete-button">
                            <span className="button-text">Delete</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

CategorySection.defaultProps = {
    items: [],
};

export default CategorySection;
