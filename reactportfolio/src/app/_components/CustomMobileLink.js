//"use client";

import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href, { scroll: false });
    }

    return (
        <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`
                h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathName === href ? 'w-full' : 'w-0'}
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

export default CustomMobileLink;