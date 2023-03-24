import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.png";

const Nav = (props) => {
    return (
        <div className="nav">
            <NavLink to="/">
                <img className="nav__img" src={Logo} alt="logo" />
            </NavLink>
            <ul className="nav__link">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav__link__active" : ""
                    }
                >
                    <li>Accueil</li>
                </NavLink>

                <NavLink
                    to="/apropos"
                    className={({ isActive }) =>
                        isActive ? "nav__link__active" : ""
                    }
                >
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;
