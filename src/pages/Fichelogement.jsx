import React from "react";
import { Navigate, useParams } from "react-router-dom";
import cardsData from "../logements.json";
import Error from "../components/Error";
import Slideshow2 from "../components/Slideshow2";
import Collapse from "../components/Collapse";
import { nanoid } from "nanoid";
import { FaStar } from "react-icons/fa";

const Fichelogement = () => {
    const params = useParams();
    //console.log(params.id);

    const logement = cardsData.find((logement) => logement.id === params.id);
    if (logement) {
        const imagesUrl = logement.pictures.map((image) => image);
        const logementTags = logement.tags.map((tag) => (
            <li key={nanoid()} className="ficheLogement__tags">
                {tag}
            </li>
        ));
        const [firstName, lastName] = logement.host.name.split(" ");

        return (
            <section className="ficheLogement">
                <Slideshow2 imagesUrl={imagesUrl} />
                <div className="ficheLogement__index">
                    <div className="ficheLogement__main">
                        <h1>{logement.title}</h1>
                        <h4>{logement.location}</h4>
                        <ul>{logementTags}</ul>
                    </div>
                    <div className="ficheLogement__host">
                        <div className="ficheLogement__host__data">
                            <div className="ficheLogement__host__name">
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                            </div>
                            <img
                                className="ficheLogement__hostpic"
                                src={logement.host.picture}
                                alt="host profile"
                            />
                        </div>
                        <ul>
                            <li
                                className={
                                    logement.rating > 0
                                        ? "rating_actif  fa-2xl"
                                        : "rating  fa-2xl"
                                }
                            >
                                <FaStar size={30} />
                            </li>
                            <li
                                className={
                                    logement.rating > 1
                                        ? "rating_actif  fa-2xl"
                                        : "rating  fa-2xl"
                                }
                            >
                                <FaStar size={30} />
                            </li>
                            <li
                                className={
                                    logement.rating > 2
                                        ? "rating_actif"
                                        : "rating"
                                }
                            >
                                <FaStar size={30} />
                            </li>
                            <li
                                className={
                                    logement.rating > 3
                                        ? "rating_actif"
                                        : "rating"
                                }
                            >
                                <FaStar size={30} />
                            </li>
                            <li
                                className={
                                    logement.rating > 4
                                        ? "rating_actif"
                                        : "rating"
                                }
                            >
                                <FaStar size={30} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ficheLogement__data">
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse
                        title="Equipements"
                        content={logement.equipments}
                    />
                </div>
                {/* <Link to="../" className="ficheLogement__link">
                    &larr; <span>Retour à la page d'accueil</span>
                </Link> */}
            </section>
        );
    } else {
        return <Error />;
    }
};

export default Fichelogement;
