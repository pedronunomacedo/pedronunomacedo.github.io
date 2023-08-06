import React, { useEffect, useState } from 'react'
import './Carrer.css'

const CarrerTimeline = () => {
    const [timelineLine, setTimelineLine] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setTimelineLine(true);
            } else {
                setTimelineLine(false);
            }
        };

        handleResize();
    
        // Add an event listener to update the screenWidth state on window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='carrer-timeline' className='flex flex-row space-x-10 mx-20 justify-center'>
            <div>
                <ol className='relative border-l border-gray-200'>   
                    <div className={`animate-fade-down ${timelineLine ? '' : ''}`}>    
                        <li className='mb-10 ml-4'>
                            <div className='absolute rounded-full border-dashed border-2 border-yellow-500 w-8 h-8 cursor-pointer -top-3 -left-4 animate-custom-spin'>
                                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                    <div className='absolute w-3 h-3 bg-yellow-400 rounded-full border border-white'></div>
                                </div>
                            </div>
                            {/* <div className='absolute top-0 left-0 w-full h-full flex'>
                                <span className="relative flex h-3 w-3 -left-1.5">
                                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-yellow-400 opacity-75 -left-1 -top-1"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                                </span>
                            </div> */}
                            <time className='mb-1 text-sm fontx-normal leading-none text-gray-400'>Present</time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Master in Informatics and Computing Engineering</h3>
                        </li>
                    </div>        
                    <div className={`animate-fade-down ${timelineLine ? 'animate-delay-300' : 'animate-delay-300'}`}>    
                        <li className='mb-10 ml-4'>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                            </div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400'>November 2022 - May 2023</time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Full-stack developer (<a href='https://ndrive.com'>NDrive</a>)</h3>
                        </li>
                    </div>
                    {timelineLine ?
                        <div className={`animate-fade-down animate-delay-1000`}>   
                            <li className='ml-4'>
                                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                    <div className='absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white'></div>
                                </div>
                                <time className='mb-1 text-sm font-normal leading-none text-gray-400'>October 2020 - July 2023</time>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Bachelor in Informatics and Computing Engineering</h3>
                            </li>
                        </div>
                        :
                        <></>
                    }
                </ol>
            </div>
            {!timelineLine ?
                <div>
                    <ol className='relative border-l border-gray-200'>
                        <div className={`animate-fade-down animate-delay-1000`}>   
                            <li className='ml-4'>
                                <div className='absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white'></div>
                                <time className='mb-1 text-sm font-normal leading-none text-gray-400'>October 2020 - July 2023</time>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Bachelor in Informatics and Computing Engineering</h3>
                            </li>
                        </div>
                    </ol>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default CarrerTimeline