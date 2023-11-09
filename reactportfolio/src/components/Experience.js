import React, { useRef } from 'react'
import { ExperienceDetails } from './ExperienceDetails'
import { motion, useScroll } from "framer-motion"
import { experienceData } from '../../data-config/experience.js';



const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center center"]
    });

    return (
        <div className='my-64 w-full'>
            <h2 className='font-bold text-8xl mb-24 w-full text-center'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-2 w-[4px] h-[99%] bg-dark origin-top' />

                <ul className='w-full flex-col items-start justify-between ml-2'>
                    {experienceData.map((experience) =>
                        <ExperienceDetails
                            key={experience.id}
                            position={experience.position}
                            duration={experience.duration}
                            company={experience.company}
                            companyLink={experience.companyLink}
                            address={experience.address}
                            description={experience.description}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Experience;