import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Carrer.css';

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
                    <li className='mb-10 relative p-0'>
                        <motion.div 
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className='w-full p-0'
                        >   
                            {/* animate-fade-down  */}
                                <div className='absolute rounded-full border-dashed -top-4 -left-4 border-2 border-yellow-500 w-8 h-8 cursor-pointer animate-custom-spin'>
                                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                        <div className='absolute w-3 h-3 bg-yellow-400 rounded-full border border-white'></div>
                                    </div>
                                </div>
                                <div className='relative left-8'>
                                    <time className='mb-1 text-sm fontx-normal leading-none text-gray-400'>Present</time>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Master in Informatics and Computing Engineering</h3>
                                </div>
                            
                        </motion.div> 
                    </li>     
                    <li className='mb-10 relative p-0'>  
                        <motion.div 
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className='w-full p-0'
                        >    
                            {/* animate-fade-down animate-delay-300 */}
                                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                                </div>
                                <div className='relative left-8'>
                                    <time className='mb-1 text-sm font-normal leading-none text-gray-400'>November 2022 - May 2023</time>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Full-stack developer (<a href='https://ndrive.com'>NDrive</a>)</h3>
                                </div>
                        </motion.div>
                    </li>
                    {timelineLine ?
                        <li className='mb-10 relative p-0'>
                            <motion.div 
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className='w-full p-0'
                            >   
                                {/* animate-fade-down animate-delay-1000 */}
                                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                        <div className='absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white'></div>
                                    </div>
                                    <div className='relative left-8'>
                                        <time className='mb-1 text-sm font-normal leading-none text-gray-400'>October 2020 - July 2023</time>
                                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Bachelor in Informatics and Computing Engineering</h3>
                                    </div>
                            </motion.div>
                        </li>
                        :
                        <></>
                    }
                </ol>
            </div>
            {!timelineLine ?
                <div>
                    <ol className='relative border-l border-gray-200 ml-10'>
                        <li className='mb-10 relative p-0'>
                            <motion.div 
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className='w-full p-0'
                            >   
                                {/* animate-fade-down animate-delay-1000 */}
                                    <div className='absolute top-0 left-0 w-full h-full flex'>
                                        <div className='absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white'></div>
                                    </div>
                                    <div className='relative left-8'>
                                        <time className='mb-1 text-sm font-normal leading-none text-gray-400'>October 2020 - July 2023</time>
                                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Bachelor in Informatics and Computing Engineering</h3>
                                    </div>
                            </motion.div>
                        </li>
                    </ol>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default CarrerTimeline