import React from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const spanStyle = {
    padding: "20px",
    color: "#ffffff",
};

const Slideshow2 = (props) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const slidesLenght = props.imagesUrl.length;
    const [right, setRight] = React.useState(true);

    const nextSlide = () => {
        setCurrentImage(
            currentImage === slidesLenght - 1 ? 0 : currentImage + 1
        );
        setRight(true);
    };

    const prevSlide = () => {
        setCurrentImage(
            currentImage === 0 ? slidesLenght - 1 : currentImage - 1
        );
        setRight(false);
    };

    console.log(currentImage);

    const slideElement = props.imagesUrl.map((url, index) => {
        return (
            index === currentImage && (
                <img
                    key={index}
                    className={
                        right
                            ? "slide-image-activeright"
                            : "slide-image-activeleft"
                    }
                    src={url}
                    alt="img"
                />
            )
        );
    });

    return (
        <div className="slide-container">
            <img
                className={
                    slidesLenght > 1
                        ? `slide-container__leftArrow`
                        : `slide-container__noArrow`
                }
                src={leftArrow}
                alt="left arrow icon"
                onClick={prevSlide}
            />
            <img
                className={
                    slidesLenght > 1
                        ? `slide-container__rightArrow`
                        : `slide-container__noArrow`
                }
                src={rightArrow}
                alt="right arrow icon"
                onClick={nextSlide}
            />
            <div className="slide-element">{slideElement}</div>
            <span>
                {currentImage + 1}/{slidesLenght}
            </span>
        </div>
    );
};

export default Slideshow2;
