import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.png";

const Nav = () => {
    return (
        <div className="nav">
            <img className="nav__img" src={Logo} alt="logo" />
            <ul className="nav__link">
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
