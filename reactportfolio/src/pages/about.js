import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import { aboutPageConfig } from '../../data-config/about.js';
import ReactMarkdown from 'react-markdown';

const renderSummary = () => {
    return aboutPageConfig.summary.map((paragraph, index, array) => {
        const isEdgeParagraph = index === 0 || index === array.length - 1;
        return (
            <ReactMarkdown key={index} className={`font-medium ${isEdgeParagraph ? '' : 'my-3'}`}>
                {paragraph}
            </ReactMarkdown>
        );
    });
};

const about = () => {
    return (
        <>
            <Head>
                <title>{aboutPageConfig.meta.title}</title>
                <meta name="description" content={aboutPageConfig.meta.description} />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={aboutPageConfig.mainTitle} className='mb-10' />

                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Summary</h2>
                            {renderSummary()}
                        </div>

                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <div className='w-full relative pt-[100%] rounded-2xl border-2 border-solid border-dark bg-light'
                                style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15), 0px 8px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image
                                    src={aboutPageConfig.profilePicture}
                                    alt={aboutPageConfig.meta.profilePicAlt}
                                    fill="responsive"
                                    style={{ objectFit: 'contain' }}
                                    className='rounded-2xl p-6'
                                />
                            </div>
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

export default about;