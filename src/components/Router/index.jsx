import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Apropos from "../../pages/Apropos";
import Fichelogement from "../../pages/Fichelogement";
import Error from "../Error";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/fichelogement" element={<Fichelogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
