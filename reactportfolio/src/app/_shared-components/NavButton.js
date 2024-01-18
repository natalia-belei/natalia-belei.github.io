import Link from 'next/link';
import PropTypes from 'prop-types';

const NavButton = ({ href, fullLabel, xsLabel, download, target, className, children }) => {
    return (
        <Link href={href} download={download} target={target} scroll={false}
            className={`flex flex-row bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-white hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                md:text-base md:p-2 md:px-4 ${className}`}
        >

            <span className='xs:hidden'>{fullLabel}</span>
            <span className='xs:block xs:text-sm hidden'>{xsLabel ?? fullLabel}</span>
            {children}
        </Link>
    )
}

NavButton.propTypes = {
    href: PropTypes.string.isRequired,
    fullLabel: PropTypes.string.isRequired,
    xsLabel: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    className: PropTypes.string,
    children: PropTypes.node
};

export default NavButton;