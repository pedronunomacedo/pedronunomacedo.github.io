import React, { useContext } from 'react'
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavContext } from '../contexts/NavContextProvider'

const Navbar = () => {
    const { nav, handleClick } = useContext(NavContext)
    
    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 pt-4 text-white bg-gradient-to-b via-black to-black z-50' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))'}}>
            <div>
                <img 
                    src="https://i.ibb.co/Kq7n9MN/logo-white.png" 
                    alt="logo" 
                    className='w-[50px]' 
                />
            </div>

            {/* Menu */}
            <ul className='hidden sm:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About me</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="carrer" smooth={true} duration={500}>Carrer</Link>
                </li>
                <li>
                    <Link to="contact-me" smooth={true} duration={500}>Contact me</Link>
                </li>
            </ul>

            <div onClick={handleClick} className='sm:hidden btn z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={
                !nav ? 'hidden animate-fade-out' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center animate-fade-left animate-duration-300ms'}>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} duration={500} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="about" smooth={true} duration={500} onClick={handleClick}>About me</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="projects" smooth={true} duration={500} onClick={handleClick}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="carrer" smooth={true} duration={500} onClick={handleClick}>Carrer</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="contact-me" smooth={true} duration={500} onClick={handleClick}>Contact me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar