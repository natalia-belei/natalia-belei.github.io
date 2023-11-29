"use client";

import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import FrozenRouter from '../_shared-components/FrozenRouter';

const AnimatedPresenceContainer = ({ mode, children }) => {

    const pathName = usePathname();
    return (
        <AnimatePresence mode={mode}>
            <FrozenRouter key={pathName} >{children}</FrozenRouter>
        </AnimatePresence>
    );
};

AnimatedPresenceContainer.propTypes = {
    mode: PropTypes.oneOf(['wait', 'popLayout', 'sync']),
    children: PropTypes.node.isRequired,
};

export default AnimatedPresenceContainer;