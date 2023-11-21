import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { contactsConfig } from '/data-config/contacts.js'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        className='w-16 h-16 bg-dark text-light text-2xl font-bold flex items-center justify-center rounded-full'
        whileHover={{
          scale: [1, 1.2, 1],
          backgroundColor: [
            "#C00000",
            "#DAA520",
            "#C00000"
          ],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity }
        }}
        initial={{ backgroundColor: "rgb(0, 0, 0)" }}
        exit={{ backgroundColor: "rgb(0, 0, 0)" }}
        href="/">{contactsConfig.ownerInitials}
      </MotionLink>
    </div>
  )
}

export default Logo