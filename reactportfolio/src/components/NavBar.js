import React, { useState } from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { BehanceIcon, LinkArrow, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from "framer-motion"
import config from 'config.js'
import { contactsConfig } from '../../data-config/contacts.js';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <button className='hidden lg:flex flex-col justify-center items-center' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out
          -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
        </span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5
          transition-all duration-300 ease-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out
          translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
        </span>
      </button>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap text-3xl'>
        {contactsConfig.linkedInProfile && (
          <motion.a
            href={contactsConfig.linkedInProfile} target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='w-7 mx-2'>
            <LinkedInIcon />
          </motion.a>
        )}
        {contactsConfig.pinterestProfile && (
          <motion.a href={contactsConfig.pinterestProfile} target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='w-7 mx-2'>
            <PinterestIcon />
          </motion.a>
        )}
        {contactsConfig.behanceProfile && (
          <motion.a href={contactsConfig.behanceProfile} target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='w-7 mx-2'>
            <BehanceIcon />
          </motion.a>
        )}
        {contactsConfig.externalLink && (
          <motion.a href={contactsConfig.externalLink} target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='w-7 mx-2'>
            <LinkArrow />
          </motion.a>
        )}
      </nav>
      <div className={`absolute left-[50%] 
        ${config.isUnderConstruction ? 'top-15' : 'top-2'} translate-x-[-50%]`}>
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;