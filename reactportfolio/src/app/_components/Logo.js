//"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { contactsConfig } from '/data-config/contacts';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        className='w-16 h-16 bg-dark text-light text-2xl font-bold flex items-center justify-center rounded-full'
        whileHover={{
          scale: [1, 1.2, 1],
          backgroundColor: [
            "rgb(192, 0, 0)",
            "rgb(255, 140, 0)",
            "rgb(192, 0, 0)"
          ],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity }
        }}
        initial={{ backgroundColor: "rgb(0, 0, 0)" }}
        exit={{ backgroundColor: "rgb(0, 0, 0)" }}
        href="/"
        scroll={false}
      >
        {contactsConfig.ownerInitials}
      </MotionLink>
    </div>
  )
}

export default Logo;