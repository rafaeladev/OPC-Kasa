import React from "react";
import collapseUp from "../../assets/collapseup.png";
import collapseDown from "../../assets/collapsedown.png";

const Collapse = (props) => {
    const [collapse, setCollapse] = React.useState(props.open);
    let content = [];

    function handleClick() {
        return setCollapse((prevCollapse) => !prevCollapse);
    }

    if (props.title === "Equipements") {
        content = props.content.map((equipement) => <li>{equipement}</li>);
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
            {collapse ? (
                <div className="collapse__content">
                    <p>{content}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Collapse;
