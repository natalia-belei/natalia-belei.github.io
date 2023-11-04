import React, { useRef } from 'react'
import { ExperienceDetails } from './ExperienceDetails'
import { motion, useScroll } from "framer-motion"

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
                    <ExperienceDetails
                        position="UI/UX Designer"
                        company="Creative Studio"
                        companyLink="https://google.com"
                        time="2022-Present"
                        address="San Francisco, CA"
                        description="Part of a dynamic team focused on enhancing user experiences for our clients, crafting stunning designs, and ensuring seamless navigation. My role includes improving visual appeal, user interaction, and creating innovative design tools."
                    />

                    <ExperienceDetails
                        position="Intern"
                        company="DesignHub"
                        companyLink="https://google.com"
                        time="Summer 2021"
                        address="Los Angeles, CA."
                        description="Contributed to the development of a new feature for a mobile app, enabling users to create and share engaging short-form video content. I was responsible for both designing an intuitive user interface and developing the backend infrastructure to support this exciting feature."
                    />

                    <ExperienceDetails
                        position="UI/UX Designer"
                        company="DesignStudio"
                        companyLink="https://google.com"
                        time="2020-2021"
                        address="New York, NY."
                        description="Played a pivotal role in the enhancement of our clients' web and mobile applications. My responsibilities involved refining user experiences, implementing design recommendations, and ensuring optimal performance and reliability of the apps."
                    />

                    <ExperienceDetails
                        position="Teaching Assistant"
                        company="DesignAcademy"
                        companyLink="https://google.com"
                        time="Fall 2018"
                        address="San Francisco, CA"
                        description="Assisted in instructing a course on UI/UX design principles, offering guidance during design assignments, and evaluating projects and assignments to help students excel in the field."
                    />

                    <ExperienceDetails
                        position="Traine"
                        company="DesignAcademy"
                        companyLink="https://google.com"
                        time="Fall 2017"
                        address="San Francisco, CA"
                        description="Assisted in instructing a course on UI/UX design principles, offering guidance during design assignments, and evaluating projects and assignments to help students excel in the field."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience