import PropTypes from 'prop-types';
import { CONTENT_TYPE } from "../../data-config/projects";
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const renderParagraph = (content, inView, ref) => (
    <motion.p
        ref={ref}
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className='my-3 font-medium text-dark text-base 
            md:my-2 sm:my-1 md:font-normal sm:text-sm xs:text-xs'
    >
        {content}
    </motion.p>
);

const renderSubTitle = (content, inView, ref) => (
    <motion.h2
        ref={ref}
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className='w-full font-semibold capitalize text-left text-dark text-4xl mt-4 
            lg:text-3xl md:text-2xl md:mt-3 sm:text-xl sm:mt-2'
    >
        {content}
    </motion.h2>
);

const renderImage = (content, inView, ref) => (
    <motion.div
        ref={ref}
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: inView ? 0 : 500, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className='relative w-full pt-[100%] my-3 
            md:my-2'
    >
        <Image src={content} alt="" fill="responsive" style={{ objectFit: 'cover' }} />
    </motion.div>
);

const ContentRenderer = ({ data }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px 250px 0px",
    });

    switch (data.type) {
        case CONTENT_TYPE.paragraph:
            return renderParagraph(data.content, inView, ref);
        case CONTENT_TYPE.subTitle:
            return renderSubTitle(data.content, inView, ref);
        case CONTENT_TYPE.image:
            return renderImage(data.content, inView, ref);
        default:
            return null;
    }
};

ContentRenderer.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default ContentRenderer;