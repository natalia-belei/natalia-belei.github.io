import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const ProjectBlock = ({ type, title, summary, img, link, calculateBlockShadowClass }) => {
    return (
        <article className='relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl
           border border-solid border-dark bg-light shadow-2xl p-12'>

            <div className={calculateBlockShadowClass} />

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-8'>
                <span className='text-primary font-medium text-xl'>{type}</span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex self-end'>
                    <Link href={link} target="_blank"
                        className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        About the Project
                    </Link>
                </div>
            </div>
        </article>
    );
};
