"use client";

import Image from "next/image";
import ParallaxEffect from "./ParallaxEffect";
import PropTypes from 'prop-types';

const FramedParallaxBanner = ({ image, classNames }) => {
    return (
        <div className={`flex flex-col justify-center overflow-hidden mb-4 w-full h-[65vh]
            xl:h-[60vh] lg:h-[55vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] 
            ${classNames}`}>

            <ParallaxEffect offset={100}>
                <div className='w-full h-full'>
                    <div className='relative w-full pt-[100%] 
                    lg:pt-[110%] md:pt-[120%] sm:pt-[130%] xs:pt-[135%]'>
                        <Image
                            src={image}
                            alt=""
                            fill="responsive"
                            style={{ objectFit: 'cover' }}
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                        />
                    </div>
                </div>
            </ParallaxEffect>
        </div>
    )
}

FramedParallaxBanner.propTypes = {
    image: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

export default FramedParallaxBanner;