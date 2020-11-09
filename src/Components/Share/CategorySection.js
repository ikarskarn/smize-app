import React from "react";
import "./CategorySection.css";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../../Context";

class CategorySection extends React.Component {
    static contextType = Context;
    state = {
        currentCategoryId: 1,
        content: "",
    };
    updateCategory = (id) => {
        this.setState({ currentCategoryId: id });
        this.props.handleShowForm(true, id);
    };
    updateContent = (e) => {
        this.setState({ content: e.target.value });
    };
    handleDeleteSayingRequest = (id) => {
        this.context.deleteSaying(id);
    };
    handleAddSayingRequest = (e) => {
        e.preventDefault();
        const allSayings = this.context.sayings;
        const id = allSayings.length + 1;
        const category_id = this.state.currentCategoryId;
        const content = this.state.content;
        const newSaying = { id, category_id, content };
        this.context.addSaying(newSaying);
        this.clearForm();
        this.props.handleShowForm(false, category_id);
    };
    handleCancel = () => {
        this.clearForm();
        this.props.handleShowForm(false, 1);
    };
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
                            <p className="saying-text">{saying.content} </p>
                            <button
                                className="delete-button"
                                type="button"
                                onClick={() => this.handleDeleteSayingRequest(saying.id)}
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
