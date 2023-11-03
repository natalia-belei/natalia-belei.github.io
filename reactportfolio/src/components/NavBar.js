import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { CustomLink } from './CustomLink';

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='ml-4' />
      </nav>
      <nav>
        <Link href="/" target={"_blank"}>LI</Link>
        <Link href="/" target={"_blank"}>LI</Link>
        <Link href="/" target={"_blank"}>LI</Link>
        <Link href="/" target={"_blank"}>LI</Link>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;