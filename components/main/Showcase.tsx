"use client"

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Showcase() {
    const upperMarque = [
        {
            image: "/marquee/marquee1.png",
            name: "Typescript"
        },
        {
            image: "/marquee/marquee2.png",
            name: "Javascript"
        },
        {
            image: "/marquee/marquee3.png",
            name: "HTML5"
        },
        {
            image: "/marquee/marquee4.png",
            name: "CSS"
        },
        {
            image: "/marquee/marquee5.png",
            name: "Python"
        },
        {
            image: "/marquee/marquee6.png",
            name: "PHP"
        },
        {
            image: "/marquee/marquee7.png",
            name: "NodeJS"
        },
        {
            image: "/marquee/marquee8.png",
            name: "Java"
        },
        {
            image: "/marquee/marquee9.png",
            name: "C++"
        },
        {
            image: "/marquee/marquee10.png",
            name: "C#"
        },
    ]

    const middleMarque = [
        {
            image: "/marquee/marquee11.png",
            name: "React"
        },
        {
            image: "/marquee/marquee12.png",
            name: "NextJS"
        },
        {
            image: "/marquee/marquee13.png",
            name: "Vite"
        },
        {
            image: "/marquee/marquee14.svg",
            name: "ElectronJS"
        },
        {
            image: "/marquee/marquee15.png",
            name: "TailwindCSS"
        },
        {
            image: "/marquee/marquee16.svg",
            name: "Bootstrap"
        },
        {
            image: "/marquee/marquee17.png",
            name: "ExpressJS"
        },
        {
            image: "/marquee/marquee18.svg",
            name: "Framer Motion"
        },
        {
            image: "/marquee/marquee19.png",
            name: "Shadcn"
        },
        {
            image: "/marquee/marquee20.png",
            name: "Vue.js"
        },
    ]

    return (
        <div className='container mx-auto w-full h-[30svh] text-white flex justify-center items-center overflow-x-hidden'>
            <div className="container mx-auto space-y-14">
                <div className="flex marquee-gradient">
                    <motion.div
                        className='flex shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 45, repeat: Infinity}}
                    >
                        {upperMarque.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-row text-white items-center'>
                                    <Image src={data.image} alt=''width={data.name == "PHP" ? 70 : 50} height={data.name == "PHP" ? 60 : 50}/>
                                    <p className='pr-20 pl-2'>{data.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 45, repeat: Infinity}}
                    >
                        {upperMarque.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-row text-white items-center'>
                                    <Image src={data.image} alt=''width={data.name == "PHP" ? 70 : 50} height={data.name == "PHP" ? 60 : 50}/>
                                    <p className='pr-20 pl-2'>{data.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>   
                </div>

                <div className="flex marquee-gradient">
                    <motion.div
                        className='flex shrink-0'
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 45, repeat: Infinity}}
                    >
                        {middleMarque.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-row text-white items-center'>
                                    <Image src={data.image} alt=''width={data.name == "PHP" ? 70 : 50} height={data.name == "PHP" ? 60 : 50}/>
                                    <p className='pr-20 pl-2'>{data.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex shrink-0'
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 45, repeat: Infinity}}
                    >
                        {middleMarque.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-row text-white items-center'>
                                    <Image src={data.image} alt=''width={data.name == "PHP" ? 70 : 50} height={data.name == "PHP" ? 60 : 50}/>
                                    <p className='pr-20 pl-2'>{data.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>   
                </div>
            </div>
        </div>
    )
}
