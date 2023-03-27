import React from "react";
import collapseUp from "../../assets/collapseup.png";
import collapseDown from "../../assets/collapsedown.png";
import { nanoid } from "nanoid";

const Collapse = (props) => {
    const [collapse, setCollapse] = React.useState(false);
    let content = [];

    function handleClick() {
        return setCollapse((prevCollapse) => !prevCollapse);
    }

    if (props.title === "Equipements") {
        content = props.content.map((equipement) => (
            <li key={nanoid()}>{equipement}</li>
        ));
    } else {
        content = props.content;
    }

    return (
        <div className="collapse">
            <p className="collapse__title">
                {props.title}
                <img
                    src={collapse ? collapseUp : collapseDown}
                    className="collapse__button"
                    alt="collpase"
                    onClick={handleClick}
                />
            </p>
            {collapse ? <p className="collapse__content">{content}</p> : ""}
        </div>
    );
};

export default Collapse;
