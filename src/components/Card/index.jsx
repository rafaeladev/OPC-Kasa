import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img
                src={props.logement.cover}
                className="card__img"
                alt="profile"
            />
            <h2 className="card__img__title">{props.logement.title}</h2>
        </div>
    );
};

export default Card;
