import React from "react";

const Banner = (props) => {
    return (
        <section className="banner">
            <div className={`banner__${props.div}img`}>
                {props.h1 ? (
                    <h1 className="banner__title">{props.title}</h1>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

export default Banner;
