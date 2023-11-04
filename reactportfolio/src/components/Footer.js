import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 items-center justify-between text-center'>
                <span className='text-medium'>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
            </Layout>
        </footer>
    )
}

export default Footer