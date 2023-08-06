import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  return (
    <div name="about" id="about" className='w-full bg-black flex sm:flex-row max-w-[2000px] sm:px-36 flex-content items-center sm:object-contain text-white pt-32 scroll-anim'>
      <div
        className='flex-1 flex flex-col 
                    max-width-[1000px] mx-auto pt-[100px] h-full md:p-8 lg:p-16
                    justify-center
                    animate-fade-down animate-once animate-duration-600 animate-ease-in-out
                    main-title'
      >
        <div className='main-title font-bold text-white'>
          <h1 className='text-4xl md:text-4xl lg:text-5xl mb-3'>
            About <span className='text-blue-400'>me</span>
          </h1>
          <h4 className='flex items-center'>
            <div className='flex flex-col'>
              <p>University student</p>
              <p>Full-stack developer</p>
              <p>Compiler developer</p>
            </div>
          </h4>
        </div>
      </div>
      <div
        className='flex-1 flex flex-col items-center 
                    max-width-[1000px] mx-auto py-auto
                    justify-center h-full
                    animate-fade-down animate-once animate-duration-600 animate-ease-in-out'
      >
        <div className='text-sm text-gray-400 max-w-[300px] md:max-w-[397px] mt-4'>
          <p className='text-justify text-lg'>
            As a possible (future) full-stack developer, I'm driven by the desire to master 
            both the front-end and the back-end development, enabling me to create complex web applications.
          </p>
          <p className='text-justify text-lg'>
            On the other hand, compiler developer intrigues me because makes me learn more about performance 
            optimization and continuously researching for new techniques to enhance language translation and code generation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About