import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current),
    };

    return (
        <motion.div 
            id='projects-carousel' 
            className='flex-1 flex flex-col mx-auto max-w-full lg:max-w-[600px] py-auto justify-center h-full px-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Slider {...settings}>
                <div key={0} className='lg:h-[400px] sm:h-[500px] flex items-center justify-center relative rounded-lg whitespace-normal w-full project-div' id='tech4you-project-div'>
                    <img
                        src="https://i.ibb.co/S7sjmFF/homepage.png"
                        alt='image 1'
                        className='h-auto max-w-full rounded-lg' // Remove max-w-full here
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='project-hover-content absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity px-12 overflow-scroll no-scrollbar'>
                        <div className='text-center overflow-scroll no-scrollbar'> {/* flex items-center */}
                            <h3 className='text-xl font-bold mb-2 project-title'>Tech4You Project</h3>
                            <p className='text-sm project-explanation overflow-scroll no-scrollbar'>
                                Project done during a university class, developed by a group of students and me.
                                This projects was developed using the Laravel framework and it consists of an online shop.
                            </p>
                        </div>
                    </div>
                </div>
                <div key={1} className='lg:h-[400px] sm:h-[500px] flex items-center justify-center relative rounded-lg whitespace-normal w-full project-div' id='compiler-project-div'>
                    <img
                        src="https://i.ibb.co/P6j6Cw1/compiler-stages.png"
                        alt='image 2'
                        className='h-auto max-w-full rounded-lg' // Remove max-w-full here
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='project-hover-content absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity px-12 overflow-scroll no-scrollbar'>
                        <div className='text-center overflow-scroll no-scrollbar'> {/* flex items-center */}
                            <h3 className='text-xl font-bold mb-2 project-title'>Compiler Project</h3>
                            <p className='text-sm project-explanation overflow-scroll no-scrollbar'>
                                This project was developed using the Java language and it consists of a compiler that 
                                translates a custom language into OLLIR code, then to Jasmin code and, finally, to Bytecode, 
                                in order to be compiled.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div
                    key={0}
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: currentSlide === 0 ? '#0077B5' : 'gray',
                        margin: '0 5px',
                    }}
                ></div>
                <div
                    key={1}
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: currentSlide === 1 ? '#0077B5' : 'gray',
                        margin: '0 5px',
                    }}
                ></div>
            </div>
        </motion.div>
    );
};

export default ProjectsCarousel;