import React from "react";
import collapseUp from "../../assets/collapseup.png";
import collapseDown from "../../assets/collapsedown.png";

const Collapase = (props) => {
    const [collapse, setCollapse] = React.useState(false);

    function handleClick() {
        return setCollapse((prevCollapse) => !prevCollapse);
    }

    return (
        <div className="collapse">
            <div className="collapse__title">
                {props.title}
                <img
                    src={collapse ? collapseUp : collapseDown}
                    className="collapse__button"
                    alt="collpase"
                    onClick={handleClick}
                />
            </div>
            {collapse ? (
                <div className="collapse__content">{props.content}</div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Collapase;
