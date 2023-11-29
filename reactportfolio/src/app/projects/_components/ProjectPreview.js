"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { projectsPageConfig } from '../../../../data-config/projects';

const FramerImage = motion(Image);

export const ProjectPreview = ({ type, title, description, img, link }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.article className={`relative w-full h-full flex
            rounded-br-2xl rounded-3xl border border-solid border-dark bg-light 
            p-10 3xl:p-8 lg:p-8 md:p-6 xs:p-4
            lg:flex-col lg:h-auto
            xs:rounded-2xl xs:rounded-br-3xl`}
            style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.65)' }}
            ref={ref}
            initial={{ y: 200, opacity: 1 }}
            animate={{ y: inView ? 0 : 100, opacity: 1 }}
            transition={{ duration: 0.9, ease: "anticipate" }}>

            <Link href={link} scroll={false} className='w-1/2 cursor-pointer overflow-hidden rounded-lg
                lg:w-full'>
                <div className="h-full  pb-[100%] relative">
                    <FramerImage src={img} alt={title} fill="responsive" style={{ objectFit: 'cover' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority={true}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                    />
                </div>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-start pl-8 h-full
                3xl:pl-6 lg:w-full lg:pl-0 lg:pt-8 md:pt-6 sm:pt-4'>

                <span className='text-primary font-medium text-xl
                        md:text-lg sm:text-base'>
                    {type}
                </span>
                <Link href={link} scroll={false} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold
                        sm:my-1 sm:text-xl xs:text-lg'>
                        {title}
                    </h2>
                </Link>
                <p className='my-1 font-medium text-dark
                    sm:my-0 xs:text-sm'>
                    {description}
                </p>
                <div className='h-full flex flex-col justify-end  mt-4 self-end
                    lg:self-auto'>
                    <Link scroll={false} href={link}
                        className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                            md:px-4 sm:px-3 sm:text-base xs:text-sm'>
                        {projectsPageConfig.previewButtonTitle}
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};
