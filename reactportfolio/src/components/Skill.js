import React from 'react';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark/95 text-light
            py-3 px-6 shadow-dark cursor-default absolute
            lg:py-2 lg:px-4 md:py-1.5 md:px-3 md:text-sm 
            xs:text-xs xs:text-light xs:opacity-[90%]'
            whileHover={{ scale: 1.2 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
};