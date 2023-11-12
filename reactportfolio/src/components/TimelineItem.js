import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const TimelineItem = ({ title, subtitle, link, duration, address, description }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl
                    sm:text-xl xs:text-lg'>
                    {title}&nbsp;<a href={link}
                        target="_blank"
                        className='text-primary capitalize inline-block'
                    >@{subtitle}</a></h3>

                <span className='capitalize font-medium text-dark/75
                    xs:text-sm'>
                    {duration} {address && `| ${address}`}
                </span>
                {description && <p className='font-medium w-full md:text-sm'>{description}</p>}
            </motion.div>
        </li>
    );
};

TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    address: PropTypes.string,
    description: PropTypes.string,
};