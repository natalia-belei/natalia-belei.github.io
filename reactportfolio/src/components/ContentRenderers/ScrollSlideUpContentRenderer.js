import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import BaseContentRenderer from './BaseContentRenderer';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';

const ScrollSlideUpContentRenderer = ({ data }) => {
    const renderAnimatedParagraph = (content, className) => {
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

    const renderAnimatedSubTitle = (content, className) => {
        const ref = useRef(null);
        const inView = useInView(ref, {
            once: true,
            margin: "0px 0px 250px 0px",
        });

        return (
            <motion.h2
                ref={ref}
                className={`font-semibold ${className}`}
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 1 }}
                transition={{ duration: 1.6, ease: "anticipate" }}
            >
                {content}
            </motion.h2>
        );
    };

    const renderAnimatedImages = (content, className) => {
        if (content.length > 4 || content.length < 1) {
            throw new Error('Columns count must be between 1 and 4.');
        }

        const AnimatedImage = ({ src, delay }) => {
            const [isVisible, setIsVisible] = useState(false);
            const ref = useRef(null);
            const inView = useInView(ref, {
                once: true,
                margin: "0px 0px 250px 0px",
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
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: isVisible ? 0 : 500, opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 1.6, ease: 'anticipate', delay: delay }}
                >
                    <Image src={src} alt="" fill="responsive" style={{ objectFit: 'cover' }} />
                </motion.div>
            );
        };

        const animationDelayFactor = 5;

        return (
            <div className={`w-full grid grid-cols-${content.length} gap-8 my-1
              sm:grid-cols-none ${content.length === 4 ? 'lg:grid-cols-2' : ''}
              lg:gap-7 md:gap-6 sm:gap-5 xs:gap-4 ${className}`}
            >
                {content.map((src, index) => (
                    <AnimatedImage
                        key={index}
                        src={src}
                        delay={index / animationDelayFactor}
                    />
                ))}
            </div>
        );
    };

    const renderContent = (renderFunction, content, className) => {
        return renderFunction(content, className);
    };

    return <BaseContentRenderer
        type={data.type}
        content={data.content}
        styles={data.styles}
        renderContent={renderContent}
        renderParagraph={renderAnimatedParagraph}
        renderSubTitle={renderAnimatedSubTitle}
        renderImages={renderAnimatedImages} />
};

ScrollSlideUpContentRenderer.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.number.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
        styles: PropTypes.shape({
            color: PropTypes.string,
            alignment: PropTypes.string,
        }),
    }).isRequired,
};

export default ScrollSlideUpContentRenderer;