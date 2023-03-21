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
                <NavLink to="/">
                    <li
                        className={
                            props.active === "home" ? "nav__link__active" : ""
                        }
                    >
                        Accueil
                    </li>
                </NavLink>
                <NavLink to="/apropos">
                    <li
                        className={
                            props.active === "about" ? "nav__link__active" : ""
                        }
                    >
                        A Propos
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;
