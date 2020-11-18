import React from "react";
import "./CategorySection.css";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../../Context";
import config from "../../config";

class CategorySection extends React.Component {
    static contextType = Context;
    state = {
        currentCategoryId: 1,
        saying_content: "",
        newSaying: {},
    };
    //handles the update state for category
    //sets the add form to visible
    updateCategory = (id) => {
        this.setState({ currentCategoryId: id });
        this.props.handleShowForm(true, id);
    };
    //updates content state based on value of textarea
    updateContent = (e) => {
        this.setState({ saying_content: e.target.value });
    };

    //delete request from API
    handleDeleteSayingRequest = (id) => {
        const url = `${config.API_ENDPOINT}/api/sayings/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        };
        fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    return Promise.resolve("User deleted saying.");
                } else {
                    return Promise.reject("Something went wrong!");
                }
            })
            //handle delete form context state
            .then(this.context.deleteSaying(id));
    };

    handleAddSayingRequest = (e) => {
        e.preventDefault();
        //build new saying before adding to database
        const category_id = this.state.currentCategoryId;
        const saying_content = this.state.saying_content;
        const newSaying = { category_id, saying_content };

        //gets proper endpoint and header options
        const url = `${config.API_ENDPOINT}/api/sayings`;
        const options = {
            method: "POST",
            body: JSON.stringify(newSaying),
            headers: {
                "Content-Type": "application/json",
            },
        };

        //performs post request to add new sayings
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            //add to context state
            .then((newSaying) => {
                this.context.addSaying(newSaying);
            })
            .catch((error) => {
                console.error(error);
            });

        //clear add form and hide it
        this.clearForm();
        this.props.handleShowForm(false, category_id);
    };

    //clear add form and hide it
    handleCancel = () => {
        this.clearForm();
        this.props.handleShowForm(false, this.state.currentCategoryId);
    };

    //clear form data
    clearForm = () => {
        const frm = document.getElementById("add-form");
        frm.reset();
    };

    render() {
        //set sayings to map over
        let sayings = this.props.sayings || [];
        return (
            <section className={`rel category-section ${sayings.length > 0 ? "" : "hidden"}`}>
                <div className="category-title">
                    <header id={this.props.id} className={`category-header`}>
                        <div className="add-to-section">
                            <h2>{this.props.title}</h2>
                            <button
                                className="add-button"
                                type="button"
                                id={this.props.id}
                                onClick={() => this.updateCategory(this.props.id)}
                            >
                                <span className="button-text">Add</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </header>
                    <form
                        onSubmit={(e) => this.handleAddSayingRequest(e)}
                        id="add-form"
                        className={`form-container ${
                            this.props.show && this.props.formToShow === this.props.id
                                ? ""
                                : "hidden"
                        }`}
                    >
                        <textarea
                            type="text-area"
                            rows={3}
                            cols={20}
                            placeholder="Enter Content"
                            name="content"
                            onChange={(e) => this.updateContent(e)}
                            required
                        />
                        <button type="submit" className="btn add">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            type="button"
                            className="btn cancel"
                            onClick={() => this.handleCancel()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </form>
                </div>

                <div className="list-sayings">
                    {sayings.map((saying) => (
                        <div className="delete-from-section" key={`saying-${saying.id}`}>
                            <p className="saying-text">{saying.saying_content} </p>
                            <button
                                className="delete-button"
                                type="button"
                                onClick={() => this.handleDeleteSayingRequest(parseInt(saying.id))}
                            >
                                <span className="button-text">Delete</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

CategorySection.defaultProps = {
    items: [],
};

export default CategorySection;
