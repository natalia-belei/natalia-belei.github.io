"use client";

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSlideUpSubTitle = ({ content, className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0% 0% 30% 0%",
    });

    return (
        <motion.h2
            ref={ref}
            className={`font-semibold ${className}`}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 1 }}
            transition={{ duration: 1.6, ease: "anticipate" }}
        >
            {content}
        </motion.h2>
    );
};

ScrollSlideUpSubTitle.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ScrollSlideUpSubTitle;