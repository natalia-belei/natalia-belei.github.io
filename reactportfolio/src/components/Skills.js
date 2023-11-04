import React from 'react'
import { motion } from "framer-motion"
import { Skill } from './Skill'

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.2 }}
                >
                    Web
                </motion.div>
                <Skill name="Skill-1" x="-10vw" y="-10vw" />
                <Skill name="Skill-2" x="-20vw" y="2vw" />
                <Skill name="Skill-3" x="22vw" y="6vw" />
                <Skill name="Skill-4" x="0vw" y="18vw" />
                <Skill name="Skill-5" x="-20vw" y="-20vw" />
                <Skill name="Skill-6" x="10vw" y="-12vw" />
                <Skill name="Skill-7" x="35vw" y="-5vw" />
                <Skill name="Skill-8" x="0vw" y="-30vw" />
                <Skill name="Skill-9" x="-30vw" y="18vw" />
                <Skill name="Skill-..." x="20vw" y="20vw" />
            </div>
        </>
    )
}

export default Skills