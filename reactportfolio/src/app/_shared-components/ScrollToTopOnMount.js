"use client";

import { useEffect } from 'react';

const ScrollToTopOnMount = () => {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };

        return () => {
            scrollToTop();
        };
    }, []);

    return null;
};

export default ScrollToTopOnMount;
