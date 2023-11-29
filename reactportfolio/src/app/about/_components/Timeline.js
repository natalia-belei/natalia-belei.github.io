"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import PropTypes from 'prop-types';

const Timeline = ({ data, title }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    });

    return (
        <div className='w-full mt-48 mb-32 md:my-32 sm:my-24'>
            <h2 className='w-full font-bold text-8xl text-center mb-16 md:text-6xl sm:text-5xl sm:mb-8'>
                {title}
            </h2>

            <div ref={ref} className='relative w-[75%] mx-auto lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-2 w-[4px] h-[99%] bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[19px]' />

                <ul className='w-full flex-col items-start justify-between ml-4 xs:ml-2'>
                    {data.map((item) =>
                        <TimelineItem
                            key={item.key}
                            title={item.title}
                            subtitle1={item.subtitle1}
                            subtitle2={item.subtitle2}
                            subtitle3={item.subtitle3}
                            subtitle1Link={item.subtitle1Link}
                            externalLink={item.externalLink}
                            description={item.description}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

Timeline.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            subtitle1: PropTypes.string.isRequired,
            subtitle2: PropTypes.string,
            subtitle3: PropTypes.string,
            subtitle1Link: PropTypes.string.isRequired,
            externalLink: PropTypes.shape({
                url: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            }),
            description: PropTypes.string,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Timeline;