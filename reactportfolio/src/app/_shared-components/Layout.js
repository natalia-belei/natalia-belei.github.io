import PropTypes from 'prop-types';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Layout = ({ children, className }) => {
    return (
        <>
            {/*
            * A workaround for the issue where scroll restoration to the top occurs on the current page
            * before the next page is rendered due to the use of AnimatePresence with 'wait' mode.
            * Link and router.push scroll are set to false to prevent default scroll behavior during navigation.
            */}
            <ScrollToTopOnMount />

            <div className={`w-full h-full inline-block z-0 bg-white 
            px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8
            py-16 xl:py-12 lg:py-8 md:py-6 sm:py-4 
            ${className}`}>
                {children}
            </div>
        </>

    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Layout;