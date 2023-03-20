import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/apropos">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;
