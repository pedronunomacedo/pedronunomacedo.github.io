import React from 'react';
import { motion } from 'framer-motion';
import ProjectsCarousel from './ProjectsCarousel';

const Projects = () => {
    return (
        <div name="projects" id="projects" className='w-full bg-black flex sm:flex-row max-w-[2000px] sm:px-36 flex-content items-center sm:object-contain text-white pt-32 scroll-anim'>
            <motion.div
                id="introduction"
                className='flex-1 flex flex-col 
                            max-width-[1000px] mx-auto pt-[100px] h-full md:p-8 lg:p-16
                            justify-center align-items
                            main-title'

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                {/* animate-fade animate-once animate-duration-1000 animate-ease-in-out */}
                <div className='main-title font-bold text-white'>
                    <h1 className='text-4xl md:text-4xl lg:text-5xl mb-3'>
                        Recent <span className='text-blue-400'>projects</span>
                    </h1>
                </div>
                <div className='text-gray-400 max-w-[300px] md:max-w-[397px] mt-4 text-justify text-lg'>
                    <p>
                        Through this section, you'll get an exclusive glimpse into the diverse range of projects I've been involved in. 
                        From software development to web deveolpment, each project represents a unique challenge and an opportunity for growth. 
                    </p>
                    <p>
                        <strong>For more information about a specific project, you can check my <a href='https://github.com/pedronunomacedo' alt='github-profile-link' className='underline hover:text-[#6B6B6B]'>github</a> profile.</strong>
                    </p>
                </div>
            </motion.div>

            <ProjectsCarousel />
        </div>
    )
}

export default Projects