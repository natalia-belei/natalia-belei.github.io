"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ScrollSlideUpImages = ({ images, animationDelayFactor, classNames }) => {
    if (!images || images.length === 0) {
        return null;
    }

    const MotionImage = motion(Image);
    const columnsCount = images.length;
    const columnsCountSm = Math.floor(columnsCount / 2);

    const getImage = (imagePath) => {
        var dynamicImage = require(`../../../../public${imagePath}`).default;
        return JSON.parse(JSON.stringify(dynamicImage))
    };

    const AnimatedImage = ({ image, delay, className }) => {
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
            <MotionImage
                src={getImage(image)}
                alt=""
                ref={ref}
                className={className}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: isVisible ? 0 : 500, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.6, ease: 'anticipate', delay: delay }}
            />
        );
    };

    const renderImage = (image, classNames) => {
        return (
            <div className={classNames}>
                <AnimatedImage image={image} />
            </div>
        );
    };

    const renderImageGrid = (images) => {
        return (
            <div className={`grid
                    grid-cols-${columnsCount} md:grid-cols-${columnsCountSm}
                    gap-x-16 xl:gap-x-12 lg:gap-x-8 md:gap-x-6 sm:gap-x-4
                    md:gap-y-6 sm:gap-y-4
                    ${classNames}`}
            >
                {images.map((image, index) => (
                    <AnimatedImage
                        key={index}
                        image={image}
                        className='col-span-1'
                        delay={animationDelayFactor ? index / animationDelayFactor : 0} />
                ))}
            </div>
        );
    }

    return images.length === 1
        ? renderImage(images[0], classNames)
        : renderImageGrid(images);
}

ScrollSlideUpImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    animationDelayFactor: PropTypes.number,
    classNames: PropTypes.string,
};

export default ScrollSlideUpImages;