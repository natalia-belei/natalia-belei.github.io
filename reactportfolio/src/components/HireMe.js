import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';
import { contactsConfig } from '/data-config/contacts.js';
import { homePageConfig } from '../../data-config/home';

const HireMe = () => {
    return (
        <div className='flex items-center justify-center overflow-hidden z-20 fixed left-4 bottom-4
            md:absolute md:right-5 md:left-auto md:top-[-5px] md:bottom-auto
            sm:right-0'>
            <div className='w-48 h-auto flex items-center justify-center relative
                md:w-24'>
                <CircularText className="fill-dark animate-spin-slow" />
                <Link
                    href={contactsConfig.ownerEmail}
                    className={`flex items-center justify-center text-center
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-dark text-light shadow-md border border-solid border-dark
                    w-20 h-20 rounded-full font-semibold
                    hover:bg-light hover:text-dark
                    md:w-12 md:h-12 md:text-[10px]`}>
                    {homePageConfig.hireMeButton.title && homePageConfig.hireMeButton.title}
                </Link>
            </div>
        </div>
    )
}

export default HireMe