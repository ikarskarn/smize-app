import React from "react";
import "./SayingContent.css";

function SayingContent(props) {
    //display sayings using props values passed down by Category Section component
    return (
        <section className="saying-section">
            <p className="saying-content">{props.content}</p>
        </section>
    );
}

SayingContent.defaultProps = {
    item: [],
};

export default SayingContent;
