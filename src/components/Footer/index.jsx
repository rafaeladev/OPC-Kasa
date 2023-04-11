import React from "react";
import Logofooter from "../../assets/logofooter.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/">
                <img className="footer__img" src={Logofooter} alt="logo" />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
