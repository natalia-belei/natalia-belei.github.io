import PropTypes from 'prop-types';
import { CONTENT_TYPE } from "../../data-config/projects";
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const renderParagraph = (content, color, alignment, inView, ref) => (
    <motion.p
        ref={ref}
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`my-4 font-medium text-dark text-base 
            md:my-3 sm:my-2 md:font-normal sm:text-sm xs:text-xs
            ${color ? `text-${color}` : ''} ${alignment ? `text-${alignment}` : ''}`}
    >
        {content}
    </motion.p>
);

const renderSubTitle = (content, color, alignment, inView, ref) => (
    <motion.h2
        ref={ref}
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`w-full font-semibold capitalize text-left text-dark text-4xl mt-6
            lg:text-3xl md:text-2xl md:mt-4 sm:text-xl sm:mt-3
            ${color ? `text-${color}` : ''} ${alignment ? `text-${alignment}` : ''}`}
    >
        {content}
    </motion.h2>
);

const renderImage = (images, inView, ref) => {
    if (images.length > 4 || images.length < 1)
        throw new Error('Columns count must be between 1 and 4.');

    return (
        <div className={`w-full grid grid-cols-${images.length} gap-8 mb-1
            sm:grid-cols-none ${images.length == 4 ? 'lg:grid-cols-2' : ''}
            lg:gap-7 md:gap-6 sm:gap-5 xs:gap-4`}>

            {images.map((src, index) => (
                <motion.div
                    key={index}
                    ref={ref}
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className='relative col-span-1 pt-[100%]'
                >
                    <Image src={src} alt="" fill="responsive" style={{ objectFit: 'cover' }} />
                </motion.div>
            ))}
        </div>
    )
}

const ContentRenderer = ({ data }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px 250px 0px",
    });

    switch (data.type) {
        case CONTENT_TYPE.paragraph:
            return renderParagraph(data.content, data.color, data.alignment, inView, ref);
        case CONTENT_TYPE.subTitle:
            return renderSubTitle(data.content, data.color, data.alignment, inView, ref);
        case CONTENT_TYPE.image:
            return renderImage(data.images, inView, ref);
        default:
            return null;
    }
};

ContentRenderer.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.number.isRequired,
        content: PropTypes.string,
        color: PropTypes.string,
        alignment: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default ContentRenderer;