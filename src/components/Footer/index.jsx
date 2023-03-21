import React from "react";
import Logofooter from "../../assets/logofooter.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__img" src={Logofooter} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
