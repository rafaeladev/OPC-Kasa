import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Fichelogement from "./pages/Fichelogement";
import NotFound from "./pages/NotFound";

// Components
import Layout from "./components/Layout";

const App = () => {
    const { search } = window.location;
    console.log(search);
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route
                        path="/fichelogement/:id"
                        element={<Fichelogement />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
