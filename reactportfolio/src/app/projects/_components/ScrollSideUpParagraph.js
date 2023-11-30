"use client";

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSideUpParagraph = ({ content, className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px 250px 0px",
    });

    return (
        <motion.p
            ref={ref}
            className={`font-medium 2xl:font-normal ${className}`}
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 1 }}
            transition={{ duration: 1.6, ease: "anticipate" }}
        >
            {content}
        </motion.p>
    );
};

ScrollSideUpParagraph.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ScrollSideUpParagraph;