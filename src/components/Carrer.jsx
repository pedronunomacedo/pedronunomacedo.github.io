import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import CarrerTimeline from './CarrerTimeline'
import './Carrer.css'

const Carrer = () => {
    return (
        <div name="about" id="carrer" className='w-full bg-black max-w-[2000px] sm:px-36 flex-content items-center sm:object-contain text-white pt-32 scroll-anim'>
            <div
                className='flex-1 flex flex-row 
                            max-width-[1000px] mx-auto pt-[100px] h-full md:p-8 lg:p-16 mb-16
                            items-center
                            animate-fade-right animate-once animate-duration-500 animate-ease-linear
                            flex-content'
            >
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
            </div>
            <div
                className='items-center 
                            max-width-[1000px] mx-auto py-auto px-16
                            justify-center h-full'
            >
                <CarrerTimeline />
            </div>
        </div>
    )
}

export default Carrer