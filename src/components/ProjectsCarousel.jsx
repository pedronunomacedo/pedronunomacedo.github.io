import React from 'react'
import Slider from 'react-slick'
import { Carousel } from "@material-tailwind/react"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ProjectsCarousel.css"

const ProjectsCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div 
            id='projects-carousel' 
            className='w-3/4 mx-auto lg:w-[600px] sm:h-[500px] 
                        justify-center items-center
                        animate-fade animate-once animate-duration-1000 animate-ease-in-out'
            >
            <Slider {...settings}>
                <div className='lg:h-[400px] sm:h-[500px] flex items-center justify-center relative rounded-lg whitespace-normal project-div' id='tech4you-project-div'>
                    <img
                        src="https://i.ibb.co/S7sjmFF/homepage.png"
                        alt='image 1'
                        className='h-auto w-full object-cover rounded-lg'
                    />
                    <div className='project-hover-content absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity px-12 overflow-scroll'>
                        <div className='text-center overflow-scroll'> {/* flex items-center */}
                            <h3 className='text-xl font-bold mb-2 project-title'>Tech4You Project</h3>
                            <p className='text-sm project-explanation overflow-scroll'>
                                Project done during a university class, developed by a group of students and me.
                                This projects was developed using the Laravel framework and it consists of an online shop.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:h-[400px] sm:h-[500px] flex items-center justify-center relative rounded-lg whitespace-normal project-div' id='compiler-project-div'>
                    <img
                        src="https://i.ibb.co/P6j6Cw1/compiler-stages.png"
                        alt='image 2'
                        className='h-auto w-full justify-center rounded-lg'
                    />
                    <div className='project-hover-content absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity px-12 overflow-scroll'>
                        <div className='text-center overflow-scroll'> {/* flex items-center */}
                            <h3 className='text-xl font-bold mb-2 project-title'>Compiler Project</h3>
                            <p className='text-sm project-explanation overflow-scroll'>
                                This project was developed using the Java language and it consists of a compiler that 
                                translates a custom language into OLLIR code, then to Jasmin code and, finally, to Bytecode, 
                                in order to be compiled.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ProjectsCarousel;
