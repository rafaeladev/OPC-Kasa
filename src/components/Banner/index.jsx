import React from "react";
import Nav from "../Nav";

const Header = () => {
    return (
        <section className="header">
            <Nav />
            <div className="header__color">
                <div className="header__img">
                    <h1 className="header__title">
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Header;
