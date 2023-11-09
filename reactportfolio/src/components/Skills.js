import React from 'react'
import { motion } from "framer-motion"
import { Skill } from './Skill'
import { skillsData } from '../../data-config/skills.js'

const Skills = () => {
    const circleRadius = 20;

    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.2 }}
                >
                    {skillsData[0]?.name}
                </motion.div>

                {skillsData.slice(1).map((skill, index, array) => {
                    const theta = (index / array.length) * 2 * Math.PI; // distribute the skills evenly in a circle
                    const randomOffset = Math.floor(Math.random() * 11) - 5; // random number between -5 and 5
                    return (
                        <Skill
                            key={skill.id}
                            name={skill.name}
                            x={`${Math.round(circleRadius * Math.cos(theta)) + randomOffset}vw`}
                            y={`${Math.round(circleRadius * Math.sin(theta)) + randomOffset}vw`}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Skills;