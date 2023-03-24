import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">
            <Link to={`fichelogement/${props.logement.id}`}>
                <img
                    src={props.logement.cover}
                    className="card__img"
                    alt="profile"
                />
                <h2 className="card__img__title">{props.logement.title}</h2>
            </Link>
        </div>
    );
};

export default Card;
