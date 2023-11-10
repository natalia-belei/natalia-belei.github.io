import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    );
};

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};