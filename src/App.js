import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Fichelogement from "./pages/Fichelogement";
import Error from "./components/Error";
import Footer from "./components/Footer/index.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/OPC-Kasa/" element={<Home />} />
                <Route path="/OPC-Kasa/apropos" element={<Apropos />} />
                <Route
                    path="/OPC-Kasa/fichelogement"
                    element={<Fichelogement />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
