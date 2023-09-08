import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {

  return (
    <div name="home" id="home" className='w-full bg-black flex sm:flex-row max-w-[2000px] sm:px-36 flex-content items-center sm:object-contain pt-16 scroll-anim'>
      <motion.div
        id="introduction"
        className='flex-1 flex flex-col 
                    max-width-[1000px] mx-auto pt-[100px] h-full md:p-8 lg:p-16
                    justify-center align-items
                    main-title'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'linear' }}
      >
        {/* animate-fade-right animate-once animate-duration-600 animate-ease-linear */}
        <div className='main-title font-bold text-white '>
          <h1 className='text-xl'>Hi, my name is</h1>
          <h1 className='text-4xl md:text-4xl lg:text-5xl'>
            <span className='text-blue-400'>Pedro</span> Macedo
          </h1>
        </div>
        <div className='text-sm text-gray-400 max-w-[300px] md:max-w-[397px] mt-4'>
          <p className='text-justify text-lg'>
            I'm currently a university student with a passion for full-stack development and coding compilers.
            Seeking new opportunities to explore and innovate in this amazing world that we live in.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='flex-1 flex flex-col items-center 
                    max-width-[1000px] mx-auto
                    justify-center h-full'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'linear' }}
      >
        {/* animate-fade animate-once animate-duration-600 animate-ease-linear */}
        <img
          src="https://i.ibb.co/PMP8LYk/me.png"
          alt="me"
          id="me-logo"
          className='max-w-[600px] min-w-[300px] w-full' 
        />
      </motion.div>
    </div>
  )
}

export default Home