"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ScrollSlideUpHighlights = ({ content, classNames }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0% 0% -10% 0%",
    });

    return (
        <span className={`w-full flex flex-wrap
            justify-around xs:justify-normal
            font-bold sm:font-medium 
            text-lg md:text-base sm:text-sm
            space-x-4 sm:space-x-0
            my-12 2xl:my-10 xl:my-8 lg:my-6 md:my-4 sm:my-2
            ${classNames}`}
        >
            {content.map((item, index) =>
                <motion.span
                    className='inline-block lg:w-full lg:text-center'
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, x: 300 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                    transition={{
                        ease: "anticipate",
                        duration: 0.5,
                        delay: 0.6 + index * 0.3,
                    }}
                >
                    {item}
                </motion.span>
            )}
        </span>
    )
}

ScrollSlideUpHighlights.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    classNames: PropTypes.string,
};

export default ScrollSlideUpHighlights;