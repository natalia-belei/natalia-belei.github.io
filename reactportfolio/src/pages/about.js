import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile-pic-2.png"
import AnimatedNumbers from '@/components/AnimatedNumbers'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { contactsConfig } from '../../data-config/contacts.js'
import { aboutPageConfig } from '../../data-config/about.js'

const about = () => {
    return (
        <>
            <Head>
                <title>{aboutPageConfig.meta.title}</title>
                <meta name="description" content={aboutPageConfig.meta.description} />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={aboutPageConfig.mainTitle} className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Summary</h2>
                            <p className='font-medium'>
                                Hello, I&apos;m <span className='font-semibold'>{contactsConfig.ownerFullName}</span>, UI/UX designer driven by my passion to craft stunning, functional, and user-centric digital experiences. With a rich 3-year journey in this domain, I&apos;m continually exploring fresh and innovative approaches to transform my clients&apos; visions into reality.
                            </p>
                            <p className='my-4 font-medium'>
                                I firmly believe that design transcends mere aesthetics; it&apos;s a tool for problem-solving and creating intuitive, delightful user interactions.
                            </p>
                            <p className='font-medium'>
                                I bring unwavering dedication to design excellence and user-focused principles to every project I undertake. I eagerly anticipate the opportunity to channel my expertise and enthusiasm into your forthcoming venture.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
                            <Image src={profilePic} alt={aboutPageConfig.meta.profilePicAlt} className='w-full h-auto rounded-2xl' />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center text-right'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={aboutPageConfig.satisfiedClients} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center text-right'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={aboutPageConfig.projectsCompleted} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center text-right'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={aboutPageConfig.yearsOfExperience} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about