import React from "react";
import Me from "../../Images/me.webp";
import { Carousel } from "react-responsive-carousel";
import AboutCarousel from "../../cards/AboutCarousel";
const About = () => {
    return (
        <div className="text-white relative text-xl w-full bg-gray-800 flex items-start h-screen overflow-hidden">
            <div
                className="absolute right-0 items-start z-0 bg-yellow-500 p-10 w-[60%] z-10 flex-col justify-center h-screen"
                style={{ background: `url(${Me})`, backgroundSize: "cover" }}
            >
            </div>
                <AboutCarousel/>
        </div>
    );
};

export default About;
