import { motion } from "framer-motion";

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

export default SocialMediaLinks;