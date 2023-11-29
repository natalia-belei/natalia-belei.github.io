//"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SocialMediaLinks = ({ profiles, navClasses, iconClasses }) => {
    return (
        <nav className={navClasses}>
            {profiles
                .map((profile, index) => {
                    const IconComponent = profile.icon;
                    return (
                        <motion.a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className={iconClasses}
                        >
                            <IconComponent />
                        </motion.a>
                    );
                })}
        </nav>
    );
};

SocialMediaLinks.propTypes = {
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    navClasses: PropTypes.string,
    iconClasses: PropTypes.string,
};

export default SocialMediaLinks;