import React from "react";
import Nav from "../Nav";

const Header = (props) => {
    return (
        <header className="header">
            <Nav active={props.active} />
        </header>
    );
};

export default Header;
