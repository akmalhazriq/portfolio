"use client"

import React from 'react'
import { motion } from "motion/react"
import { SparklesIcon } from '@heroicons/react/24/solid'
import EarthCanvas from '../canvas/Earth'

export default function Hero() {
    return (
        <div className="relative flex flex-col h-svh w-full">
            <motion.div initial="hidden" animate="visible" className='flex flex-col md:flex-row items-center justify-center h-full w-full z-20 my-20 md:my-0'>
                <div className="flex flex-col gap-5 justify-center m-auto text-center md:text-start md:w-1/2 px-10 lg:px-28">
                    {/* Center the Welcome-box on small screens and align left on medium and above */}
                    <motion.div className='Welcome-box py-2 px-1.75 border border-[#7042f88b] flex justify-center md:justify-start mx-auto md:mx-0'> 
                        <SparklesIcon className='text-[#b49bff] mr-2.5 h-5 w-5'/>
                        <h1 className='Welcome-text text-[13px]'>
                            Welcome To My Portfolio
                        </h1>
                    </motion.div>

                    <div><motion.div className='flex flex-col text-5xl md:text-6xl font-bold text-white max-w-150 w-auto h-auto'>
                        <span className='text-center md:text-left space-y-2'> {/* Center text on small screens, left-align on medium and above */}
                            <span className='block'>Hi, I&apos;m</span> {/* This will be on the first line */}
                            <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 block pb-1.5'> {/* This will be on the second line */}
                                Akmal Hazriq
                            </span>
                        </span>
                    </motion.div>

                    <motion.p className='text-lg text-gray-400 my-5 max-w-150'>
                        I&apos;m a Full Stack Software Engineer that have experience in Website, Desktop, Mobile and Console Application. Check out my projects and skills here.
                    </motion.p></div>

                    <div className="flex justify-center md:justify-start"> {/* Center button only on small screens */}
                        <motion.a
                            href="https://github.com/akmalhazriq"
                            target="_blank"
                            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-50 min-w-50'
                        >
                            View My Projects
                        </motion.a>
                    </div>
                </div>

                <motion.div className='w-full h-full flex justify-center items-center md:w-1/2 md:mt-0 mt-10'>
                    <EarthCanvas />
                </motion.div>
            </motion.div>
        </div>
    )
}