import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Fichelogement from "./pages/Fichelogement";
import Error from "./components/Error";
import Footer from "./components/Footer/index.jsx";

const App = () => {
    const { search } = window.location;
    console.log(search);
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/fichelogement" element={<Fichelogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
};

export default App;
