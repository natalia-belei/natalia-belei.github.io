import React from 'react';
import { motion } from "framer-motion";

export const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.2 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 0.5 }}
        >
            {name}
        </motion.div>
    );
};
