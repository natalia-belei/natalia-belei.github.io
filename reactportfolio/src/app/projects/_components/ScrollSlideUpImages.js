"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ScrollSlideUpImages = ({ className, images, animationDelayFactor }) => {
    const AnimatedImage = ({ src, delay }) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);
        const inView = useInView(ref, {
            once: true,
            margin: "0% 0% 30% 0%",
        });

        useEffect(() => {
            if (inView) {
                setIsVisible(true);
            }
        }, [inView]);

        return (
            <motion.div
                ref={ref}
                className={`relative col-span-1 pt-[100%] ${className}`}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: isVisible ? 0 : 500, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.6, ease: 'anticipate', delay: delay }}
            >
                <Image src={src} alt="" fill="responsive" style={{ objectFit: 'cover' }} />
            </motion.div>
        );
    };

    return (
        <div className={`w-full grid grid-cols-${images.length} gap-8 my-1
              sm:grid-cols-none ${images.length === 4 ? 'lg:grid-cols-2' : ''}
              lg:gap-7 md:gap-6 sm:gap-5 xs:gap-4 ${className}`}
        >
            {images.map((src, index) => (
                <AnimatedImage
                    key={index}
                    src={src}
                    delay={animationDelayFactor ? index / animationDelayFactor : 0} />
            ))}
        </div>
    );
}

ScrollSlideUpImages.propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    animationDelayFactor: PropTypes.number,
};

export default ScrollSlideUpImages;