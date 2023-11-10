import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

export const ProjectPreview = ({ type, title, description, img, link, calculateBlockShadowClass }) => {
    return (
        <article className={`relative w-full flex items-start justify-between rounded-br-2xl rounded-3xl
           border border-solid border-dark bg-light p-12`} style={{ boxShadow: calculateBlockShadowClass }}>

            <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative'>
                <div className="w-full h-0 pb-[100%] relative">
                    <FramerImage src={img} alt={title} fill="responsive" style={{ objectFit: 'contain' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority={true}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                    />
                </div>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-8'>
                <div>
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link href={link} className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark'>{description}</p>
                </div>

                <div className='mt-2 flex self-end bottom-12 absolute'>
                    <Link href={link}
                        className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        About the Project
                    </Link>
                </div>
            </div>
        </article>
    );
};
