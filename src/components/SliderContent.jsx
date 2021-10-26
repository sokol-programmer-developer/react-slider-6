import React from "react";
import "./Style.css";

import Carousel, { CarouselItem } from "./Carousel";

import pic1 from "../assets/pic-1.webp"
import pic2 from "../assets/pic-2.webp"
import pic3 from "../assets/pic-3.webp"
import pic4 from "../assets/pic-4.webp"
import pic5 from "../assets/pic-5.webp"


const SliderContent = () => {
    return (
            <div className="slider_section">
                <Carousel>
                    <CarouselItem>
                        <div id={1} className='slider_container'>

                            <img src={pic1} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> Slide - 1 </h2>
                                    <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> Click Me </h2>
                                </button>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div id={2} className='slider_container'>

                            <img src={pic2} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> Slide - 2 </h2>
                                    <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> Click Me </h2>
                                </button>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div id={3} className='slider_container'>

                            <img src={pic3} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> Slide - 3 </h2>
                                    <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> Click Me </h2>
                                </button>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div id={4} className='slider_container'>

                            <img src={pic4} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> Slide - 4 </h2>
                                    <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> Click Me </h2>
                                </button>

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div id={5} className='slider_container'>

                            <img src={pic5} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> Slide - 5 </h2>
                                    <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> Click Me </h2>
                                </button>

                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
    );
}

export default SliderContent;
