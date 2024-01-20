"use client";

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 1,
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full text-dark capitalize
                text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl
                font-extrabold xs:font-bold
                py-2 sm:py-0
                ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(" ").map((word, index) =>
                    <motion.span className='inline-block'
                        key={word + '-' + index}
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                )
                }
            </motion.h1>
        </div>
    )
}

AnimatedText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default AnimatedText;