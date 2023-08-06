import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

const ContactMe = () => {
    return (
        <div name="contact-me" id="contact-me" className='w-full bg-black flex sm:flex-row max-w-[2000px] sm:px-36 flex-content items-center sm:object-contain pt-16 scroll-anim'>
            <div
                id="introduction"
                className='flex-1 flex flex-col 
                            max-width-[1000px] mx-auto pt-[100px] h-full md:p-8 lg:p-16
                            justify-center align-items
                            animate-fade-right animate-once animate-duration-600 animate-ease-linear
                            main-title'
            >
                <div className='main-title font-bold text-white '>
                    <h1 className='text-xl'>How to</h1>
                    <h1 className='text-4xl md:text-4xl lg:text-5xl'>
                        <span className='text-blue-400'>Contact</span> me ?
                    </h1>
                </div>
                <div className='text-sm text-gray-400 max-w-[300px] md:max-w-[397px] mt-4 flex flex-col justify-center items-center'>
                    <p className='text-center text-lg'>
                        Feel free to reach out if you have any questions, inquiries, or just want to get in touch. I'm always available and eager to hear from you. Let's connect and have a great conversation!
                    </p>
                    <div className='flex flex-row space-x-4'>
                        <div className='relative rounded-full bg-gray-200 p-4 mt-5 w-12 h-12 hover:bg-blue-600 cursor-pointer group hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-out'>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <a href="mailto:pedronunomacedo@hotmail.com">
                                    <FaLinkedin className='text-2xl text-blue-600 group-hover:text-white' />
                                </a>
                            </div>
                        </div>
                        <div className='relative rounded-full bg-gray-200 p-4 mt-5 w-12 h-12 hover:bg-[#E4405F] cursor-pointer group hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-out'>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <a href="mailto:pedronunomacedo@hotmail.com">
                                    <FaInstagram className='text-2xl text-[#E4405F] group-hover:text-white' />
                                </a>
                            </div>
                        </div>
                        <div className='relative rounded-full bg-gray-200 p-4 mt-5 w-12 h-12 hover:bg-[#6B6B6B] cursor-pointer group hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-out'>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <a href="mailto:pedronunomacedo@hotmail.com">
                                    <FaGithub className='text-2xl text-[#181717] group-hover:text-white' />
                                </a>
                            </div>
                        </div>
                        <div className='relative rounded-full bg-gray-200 p-4 mt-5 w-12 h-12 hover:bg-[#0077B5] cursor-pointer group hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-out'>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <a href="mailto:pedronunomacedo@hotmail.com">
                                    <FaEnvelope className='text-2xl text-[#0077B5] group-hover:text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex-1 flex flex-col items-center 
                            max-width-[1000px] mx-auto
                            justify-center h-full
                            animate-fade animate-once animate-duration-600 animate-ease-linear'
            >
                <img
                    src="https://i.ibb.co/HG8JpN5/me2.png"
                    alt="me"
                    id="me-logo"
                    className='max-w-[600px] min-w-[300px] w-full' 
                />
            </div>
        </div>
    )
}

export default ContactMe