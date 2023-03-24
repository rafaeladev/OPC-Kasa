import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../logements.json";
import Error from "../components/Error";
import Slideshow2 from "../components/Slideshow2";

const Fichelogement = () => {
    const params = useParams();
    console.log(params.id);

    const logement = cardsData.find((logement) => logement.id === params.id);

    const imagesUrl = logement.pictures.map((image) => image);

    return (
        <>
            {logement ? (
                <section className="ficheLogement">
                    <Slideshow2 imagesUrl={imagesUrl} />
                    <div className="ficheLogement__index">
                        <div className="ficheLogement__main">
                            <h1>{logement.title}</h1>
                            <h4>{logement.location}</h4>
                            <p>{logement.tags}</p>
                        </div>
                        <div className="ficheLogement__host">
                            <div className="ficheLogement__host__data">
                                <p>{logement.host.name}</p>
                                <p>{logement.host.name}</p>
                            </div>
                            <p>{logement.rating}</p>
                        </div>
                    </div>
                    <div className="ficheLogement__data">
                        <p>{logement.description}</p>
                        <p>{logement.equipments}</p>
                    </div>
                </section>
            ) : (
                <Error />
            )}
        </>
    );
};

export default Fichelogement;
