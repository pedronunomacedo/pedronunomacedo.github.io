import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import CarrerTimeline from './CarrerTimeline';
import './Carrer.css';

const Carrer = () => {
    return (
        <div name="about" id="carrer" className='w-full bg-black sm:px-36 flex-content items-center sm:object-contain text-white pt-32 scroll-anim'>
            <div className='w-full mx-auto bg-black flex flex-row lg:flex-col sm:px-36 flex-content items-center sm:object-contain pt-16 scroll-anim'>
                <motion.div
                    className='flex-1 flex flex-row 
                                w-full mx-auto pt-[100px] h-full md:p-8 lg:p-16 mb-16 
                                items-center
                                flex-content'

                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    {/* animate-fade-right animate-once animate-duration-500 animate-ease-linear */}
                    <div className='main-title font-bold text-white'>
                        <h1 className='text-4xl md:text-4xl lg:text-5xl mb-3'>Carrer</h1>
                    </div>
                    <div className='lg:ml-auto md:ml-auto border-b-[1px]'>
                        <h1 className='text-white text-xl md:text-xl lg:text-xl mb-3'>
                            <a href='https://drive.google.com/file/d/1LFRxwaddcqYELjKfumlaxl-WPg_rEAVv/view?usp=sharing' className='flex flex-row space-x-16'>
                                <span className='hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-out'>Get my CV</span> 
                                <span><FaFileAlt /></span>
                            </a>
                        </h1>
                    </div>
                </motion.div>
                <div
                    className='items-center 
                                max-width-[1000px] mx-auto py-auto px-16
                                justify-center h-full'
                >
                    <CarrerTimeline />
                </div>
            </div>
        </div>
    )
}

export default Carrer