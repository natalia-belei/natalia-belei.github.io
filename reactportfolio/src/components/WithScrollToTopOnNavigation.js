import { useEffect } from 'react';

/**
 * A workaround for the issue where scroll restoration to the top occurs on the current page
 * before the next page is rendered due to the use of AnimatePresence with 'wait' mode.
 * Link and router.push scroll are set to false to prevent default scroll behavior during navigation.
 */
const WithScrollToTopOnNavigation = (WrappedComponent) => {
    const ScrollToTop = (props) => {

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return <WrappedComponent {...props} />;
    };

    return ScrollToTop;
};

export default WithScrollToTopOnNavigation;