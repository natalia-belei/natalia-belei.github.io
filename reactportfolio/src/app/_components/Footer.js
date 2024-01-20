import Layout from '../_shared-components/Layout';

// TODO: fix footer size on lg-md screens
const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
            sm:text-base'>
            <Layout className='py-8 items-center justify-between text-center
                lg:flex-col lg:py-6'>
                <span className='text-medium'>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
            </Layout>
        </footer>
    )
}

export default Footer;