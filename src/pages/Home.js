import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import cardsData from "../logements.json";

const Home = () => {
    const cardElements = cardsData.map((data) => {
        return <Card key={data.id} logement={data} />;
    });

    return (
        <div>
            <Banner />
            <section className="cardsList">{cardElements}</section>
            <Footer />
        </div>
    );
};

export default Home;
