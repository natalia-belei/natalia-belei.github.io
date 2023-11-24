import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { BehanceIcon, LinkArrow, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from "framer-motion";
import { contactsConfig } from '../../data-config/contacts.js';
import { CustomMobileLink } from './CustomMobileLink';
import SocialMediaLinks from './SocialMediaLinks';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navBarRef = useRef(null);
  const toggleRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const profiles = [
    contactsConfig.linkedInProfile && {
      icon: LinkedInIcon,
      url: contactsConfig.linkedInProfile
    },
    contactsConfig.pinterestProfile && {
      icon: (props) => <PinterestIcon className="rounded-full lg:bg-light" {...props} />,
      url: contactsConfig.pinterestProfile
    },
    contactsConfig.behanceProfile && {
      icon: BehanceIcon,
      url: contactsConfig.behanceProfile
    },
    contactsConfig.externalLink && {
      icon: (props) => <LinkArrow className="rounded-md lg:bg-light" {...props} />,
      url: contactsConfig.externalLink
    },
  ];

  useEffect(() => {
    const handleOutsideClose = (event) => {
      if (navBarRef.current
        && !toggleRef.current.contains(event.target)
        && !navBarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClose);
      document.addEventListener('touchstart', handleOutsideClose);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClose);
      document.removeEventListener('touchstart', handleOutsideClose);
    };
  }, [isOpen]);

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10
      lg:px-16 md:px-12 sm:px-8'>
      <button className='hidden lg:flex flex-col justify-center items-center z-100'
        ref={toggleRef} onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out
          ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}>
        </span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5
          transition-all duration-300 ease-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out
          ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}>
        </span>
      </button>

      <div className='flex lg:hidden w-full justify-between items-center'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='ml-4' />
        </nav>

        <SocialMediaLinks
          profiles={profiles.filter(Boolean)}
          navClasses="flex items-center justify-center flex-wrap text-3xl"
          iconClasses="w-7 mx-2"
        />
      </div>

      {isOpen && <motion.div
        ref={navBarRef}
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        className='min-w-[70vw] flex flex-col justify-between items-center z-30
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-dark/90 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
        </nav>

        <SocialMediaLinks
          profiles={profiles.filter(Boolean)}
          navClasses="flex items-center justify-center flex-wrap text-3xl mt-6"
          iconClasses="w-7 mx-2 sm:mx-1"
        />
      </motion.div>}

      <div className='absolute left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;