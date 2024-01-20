"use client";

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSlideUpSubTitle = ({ content, classNames }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0% 0% 30% 0%",
    });

    return (
        <motion.h2
            ref={ref}
            className={classNames}
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
    classNames: PropTypes.string,
};

export default ScrollSlideUpSubTitle;