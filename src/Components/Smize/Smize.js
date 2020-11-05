import React from "react";
import { Link } from "react-router-dom";
import "./Smize.css";
import "../../App.css";

export default class Introduction extends React.Component {
    render() {
        return (
            <div className="smize-page">
                <nav role="navigation" className="nav-bar black">
                    <Link to="/" className="nav nav-home">
                        Instructions
                    </Link>
                    <Link to="/smize" className="nav nav-smize">
                        Smize
                    </Link>
                    <Link to="/share" className="nav nav-share">
                        Share Your Own
                    </Link>
                </nav>
                <h1 className="smize-title">Smize for the Camera</h1>
                <section>
                    <form className="start-smize" id="start-smize">
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                className="smize-category"
                                name="category"
                                id="category"
                                aria-label="Category for Smize"
                                aria-required="true"
                                aria-invalid="true"
                                defaultValue={""}
                                required
                            >
                                <option value="" disabled>
                                    Choose a Category
                                </option>
                                <option value="" disabled>
                                    Kids
                                </option>
                                <option value="" disabled>
                                    Men
                                </option>
                                <option value="" disabled>
                                    Women
                                </option>
                            </select>
                        </div>
                        <div className="smize-buttons">
                            <button type="submit">Start</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}
