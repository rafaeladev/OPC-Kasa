import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const proprietes = {
    //duration: 5000,
    //transitionDuration: 500,
    infinite: false,
    indicator: true,
    arrow: false,
};

const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
};

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
};

const Slideshow = (props) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    return (
        <>
            <FaArrowLeft />
            <div className="slide-container">
                <Slide {...proprietes}>
                    {/* {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div
                            style={{
                                ...divStyle,
                                backgroundImage: `url(${slideImage.url})`,
                            }}
                        >
                            <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))} */}

                    {props.imagesUrl.map((url, index) => (
                        <div key={index}>
                            <div
                                style={{
                                    ...divStyle,
                                    backgroundImage: `url(${url})`,
                                }}
                            >
                                <span style={spanStyle}>blabla</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <FaArrowRight />
        </>
    );
};

export default Slideshow;
