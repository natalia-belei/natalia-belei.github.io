import Layout from '@/components/Layout';
import Head from 'next/head';
import profilePic from "../../public/images/profile/profile-pic-1.png";
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import { contactsConfig } from '../../data-config/contacts.js';
import { homePageConfig } from '../../data-config/home.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>{homePageConfig.meta.title}</title>
        <meta name="description" content={homePageConfig.meta.description} />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full md:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt={homePageConfig.meta.profilePicAlt}
                className='w-full h-auto md:inline-block md:w-full md:mb-6'
                priority={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center md:w-full md:text-center'>
              <h1></h1>
              <AnimatedText text={homePageConfig.mainTitle} className='!text-left md:!text-center' />
              <p className='my-4 text-base font-medium md:text-md sm:text-sm'>
                {homePageConfig.summary}
              </p>
              <div className='flex items-center self-start mt-2 md:self-center'>
                <Link href={contactsConfig.resumePath} target='blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  md:text-base md:p-2 md:px-4'
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href={contactsConfig.ownerEmail} target='blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline
                    md:text-base'
                >Contact Me</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}