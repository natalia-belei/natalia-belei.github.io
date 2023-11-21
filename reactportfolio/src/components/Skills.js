import React from 'react';
import { motion } from "framer-motion";
import { Skill } from './Skill';
import { skillsData } from '../../data-config/skills.js';
import { skillsConfig } from '../../data-config/skills.js';

const Skills = () => {
    const primaryColor = require("tailwind.config.js").theme.extend.colors.primary;

    return (
        <>
            <div className='w-full mt-48 md:mt-32 sm:mt-24'>
                <h2 className='font-bold text-8xl mb-8 w-full text-center
                md:text-6xl sm:text-5xl'>Skills</h2>

                <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circular
                lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh]
                lg:bg-circularLg md:bg-circularMd sm:bg-circularSm xs:bg-circularXs'>
                    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark/95 text-light
                    p-8 shadow-dark cursor-default
                    lg:p-6 md:p-4 xs:p-2 xs:text-xs xs:opacity-[90%]'
                        whileHover={{ scale: 1.2, backgroundColor: primaryColor }}
                    >
                        {skillsData[0]?.name}
                    </motion.div>

                    {skillsData.slice(1).map((skill, index) => {
                        const positions = calculateSkillPositions(skillsData.slice(1), skillsConfig.numCircles, skillsConfig.baseRadius, skillsConfig.circleSpacing);
                        return (
                            <Skill
                                key={skill.id}
                                name={skill.name}
                                onHoverBgColor={primaryColor}
                                x={positions[index].x}
                                y={positions[index].y}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )

    function calculateSkillPositions(skills, numCircles, baseRadius, circleSpacing) {
        if (numCircles <= 0) {
            throw new Error('Number of circles must be positive');
        }

        return skills.map((_, index) => {
            const circleIndex = Math.floor(index / (skills.length / numCircles));
            const circleRadius = baseRadius + circleIndex * circleSpacing;

            const skillsPerCircle = Math.ceil(skills.length / numCircles);
            const theta = ((index % skillsPerCircle) / skillsPerCircle + (Math.random() - 0.5) * skillsConfig.randomnessFactor) * 2 * Math.PI;

            return {
                x: `${Math.round(circleRadius * Math.cos(theta))}vw`,
                y: `${Math.round(circleRadius * Math.sin(theta))}vh`,
            };
        });
    }
}

export default Skills;