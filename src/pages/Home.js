import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";
import cardsData from "../logements.json";

const Home = () => {
    const cardElements = cardsData.map((data) => {
        return <Card key={data.id} logement={data} />;
    });

    return (
        <div>
            <Header />
            <Banner title=" Chez vous, partout et ailleurs" div="home" />
            <section className="cardsList">{cardElements}</section>
            <Footer />
        </div>
    );
};

export default Home;
