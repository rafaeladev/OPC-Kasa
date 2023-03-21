import React from "react";
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
            <Header active="home" />
            <Banner
                h1={true}
                title=" Chez vous, partout et ailleurs"
                div="home"
            />
            <section className="cardsList">{cardElements}</section>
        </div>
    );
};

export default Home;
