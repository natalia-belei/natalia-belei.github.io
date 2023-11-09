import React from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { BehanceIcon, LinkArrow, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from "framer-motion"
import config from 'config.js'
import { contactsConfig } from '../../data-config/contacts.js';

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
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