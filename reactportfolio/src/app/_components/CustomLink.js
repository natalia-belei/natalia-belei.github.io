//"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomLink = ({ href, title, className = "" }) => {
    const pathName = usePathname();

    return (
        <Link href={href} scroll={false} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathName === href ? 'w-full' : 'w-0'}
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

export default CustomLink;