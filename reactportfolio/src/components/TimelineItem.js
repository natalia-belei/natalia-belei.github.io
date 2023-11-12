import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const TimelineItem = ({ title, subtitle1, subtitle2, subtitle3, subtitle1Link, description, externalLink }) => {
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
                    {title}&nbsp;<a href={subtitle1Link}
                        target="_blank"
                        className='text-primary capitalize inline-block'
                    >@{subtitle1}</a></h3>

                {(subtitle2 &&
                    <span className='capitalize font-medium text-dark/75
                    xs:text-sm'>
                        {subtitle2}
                    </span>)}
                {(subtitle3 &&
                    <>
                        <br />
                        <span className='capitalize font-medium text-dark/75
                    xs:text-sm'>
                            {subtitle3}
                        </span>
                    </>
                )}
                {(externalLink &&
                    <>
                        <br />
                        <a href={externalLink} target="_blank" rel="noopener noreferrer"
                            className='font-medium text-dark/75 xs:text-sm underline'>
                            {externalLink}
                        </a>
                    </>
                )}

                {description &&
                    <p className='font-medium w-full md:text-sm'>{description}</p>}
            </motion.div>
        </li>
    );
};

TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle1: PropTypes.string.isRequired,
    subtitle2: PropTypes.string,
    subtitle3: PropTypes.string,
    description: PropTypes.string,
    subtitle1Link: PropTypes.string.isRequired,
    externalLink: PropTypes.string,
};