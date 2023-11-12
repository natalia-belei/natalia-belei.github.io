import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const ExperienceDetails = ({ position, duration, company, companyLink, address, description }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl
                    sm:text-xl xs:text-lg'>
                    {position}&nbsp;<a href={companyLink}
                        target="_blank"
                        className='text-primary capitalize inline-block'
                    >@{company}</a></h3>

                <span className='capitalize font-medium text-dark/75
                    xs:text-sm'>
                    {duration} | {address}
                </span>
                <p className='font-medium w-full
                    md:text-sm'>
                    {description}
                </p>
            </motion.div>
        </li>
    );
};

ExperienceDetails.propTypes = {
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    companyLink: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};