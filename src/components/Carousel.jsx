import React, { useEffect, useState } from "react";
import "./Style.css";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeId, setActiveId] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateId = (newId) => {
        if (newId < 0) {
            newId = React.Children.count(children) - 1;
        } else if (newId >= React.Children.count(children)) {
            newId = 0;
        }

        setActiveId(newId);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateId(activeId + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });



    return (
        <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >

            <div
                className="inner"
                style={{ transform: `translateX(-${activeId * 100}vw)` }}
            >
                {React.Children.map(children, (child, ) => {
                    return React.cloneElement(child, { width: "100vw" });
                })}
            </div>

            <div className="arrows">
                <button
                    className="left_arrow"
                    onClick={() => {
                        updateId(activeId - 1);
                    }}
                >

                    <h2 className="arrows_h2" >  &#8592; </h2>
                </button>


                <button
                    className="right_arrow"
                    onClick={() => {
                        updateId(activeId + 1);
                    }}
                >
                    <h2  className="arrows_h2">  &#8594; </h2>
                </button>
            </div>

            <div className="dots">
                {React.Children.map(children, (child, Id) => {
                    return (
                        <button
                            className={`${Id === activeId ? "dot_active" : "dot_default"}`}
                            onClick={() => {
                                updateId(Id);
                            }}
                        >
                            {Id + 1}
                        </button>
                    );
                })}
            </div>


        </div>
    );
};

export default Carousel;
