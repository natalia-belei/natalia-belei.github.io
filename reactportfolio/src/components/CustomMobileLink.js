import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { CustomMobileLink } from './CustomMobileLink';

export const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`
                h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </button>
    );
};

CustomMobileLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    toggle: PropTypes.func.isRequired,
};