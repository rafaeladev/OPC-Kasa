import React from "react";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Slideshow2 = (props) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [right, setRight] = React.useState(true);
    const slidesLenght = props.imagesUrl.length;

    const toggleBullet = (indexPic) => {
        let bulletsArray = [];
        for (let i = 0; i < slidesLenght; i++) {
            bulletsArray = [
                ...bulletsArray,
                <li
                    key={i}
                    className={
                        i === indexPic
                            ? `slidecontainer_bulletactive`
                            : `slidecontainer__bullet`
                    }
                >
                    ●
                </li>,
            ];
        }
        return bulletsArray;
    };

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

    const slideElement = props.imagesUrl.map((url, index) => {
        return (
            index === currentImage && (
                <img
                    className={
                        right
                            ? "slide-image-activeright"
                            : "slide-image-activeleft"
                    }
                    key={index}
                    // className={
                    //     right
                    //         ? "slide-image-activeright"
                    //         : "slide-image-activeleft"
                    // }
                    src={url}
                    alt="logement détails"
                />
            )
        );
    });

    return (
        <div className="slidecontainer">
            <div className="slidecontainer__element">{slideElement}</div>
            <img
                className={
                    slidesLenght > 1
                        ? `slidecontainer__leftArrow`
                        : `slidecontainer__noArrow`
                }
                src={leftArrow}
                alt="left arrow icon"
                onClick={prevSlide}
            />
            <img
                className={
                    slidesLenght > 1
                        ? `slidecontainer__rightArrow`
                        : `slidecontainer__noArrow`
                }
                src={rightArrow}
                alt="right arrow icon"
                onClick={nextSlide}
            />
            <ul>{slidesLenght > 1 ? toggleBullet(currentImage) : null}</ul>
        </div>
    );
};

export default Slideshow2;
