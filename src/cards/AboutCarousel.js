import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

const AboutCarousel = () => {
    const skillsData = [
        {
            "title": "React",
            "description": "Proficient in building interactive user interfaces using React."
        },
        {
            "title": "Next.js",
            "description": "Experienced with server-side rendering and routing in Next.js."
        },
        {
            "title": "Tailwind CSS",
            "description": "Skilled in creating responsive and stylish designs with Tailwind CSS."
        },
        {
            "title": "DevOps",
            "description": "Familiar with continuous integration, deployment, and containerization."
        },
        {
            "title": "Frontend Development",
            "description": "Well-versed in frontend technologies such as HTML, CSS, and JavaScript."
        },
        {
            "title": "Backend Development",
            "description": "Knowledgeable in server-side technologies and database management."
        },
        {
            "title": "Full Stack Development",
            "description": "Able to develop both frontend and backend components of web applications."
        },
        {
            "title": "MERN Stack",
            "description": "Skilled in MongoDB, Express.js, React, and Node.js development."
        },
        {
            "title": "React Native",
            "description": "Proficient in building cross-platform mobile applications using React Native."
        }
    ];

    return (
        <Carousel className='w-[50%] mt-[12%]' >
            {skillsData.map((skill, index) => (
                <div key={index} className="bg-yellow-500  w-[100%] p-4 rounded-3xl">
                    {/* <h1 className="text-8xl font-bold">"</h1> */}
                    <p className="text-white text-4xl ">{skill.title}</p>
                    <p className="text-2xl mt-5 mb-20">
                        {skill.description}
                    </p>
                </div>
            ))}
        </Carousel>
    )
}

export default AboutCarousel
