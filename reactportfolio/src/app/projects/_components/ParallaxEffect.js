"use client";

import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

const ParallaxEffect = ({ children, offset = 50 }) => {
    const prefersReducedMotion = useReducedMotion();
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useScroll();

    const initial = -clientHeight;
    const final = clientHeight - offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => {
        const onResize = () => {
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

ParallaxEffect.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number,
};

export default ParallaxEffect;