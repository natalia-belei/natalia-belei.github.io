import React from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { LinkArrow, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap text-3xl'>
        <motion.a
          href="https://www.linkedin.com" target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'>
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://pinterest.com" target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'>
          <PinterestIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'>
          <LinkArrow />
        </motion.a>
        <motion.a href="/" target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-2'>
          <LinkArrow />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;