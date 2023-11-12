import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline.js';
import { aboutPageConfig } from '../../data-config/about.js';
import ReactMarkdown from 'react-markdown';
import { experienceData } from '../../data-config/experience.js';
import { certificationsData } from '../../data-config/certifications.js';

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
                <Layout className='pt-16 sm:pt-8'>
                    <AnimatedText text={aboutPageConfig.mainTitle} className='mb-16 md:mb-8 sm:mb-6' />

                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start
                            xl:col-span-4 md:col-span-8 md:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Summary</h2>
                            {renderSummary()}
                        </div>

                        <div className='col-span-3 flex flex-col items-start justify-start
                            xl:col-span-4 md:col-span-8 md:order-1'>
                            <div className='w-full relative pt-[100%] rounded-2xl border-2 border-solid border-dark bg-light'
                                style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15), 0px 8px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image
                                    src={aboutPageConfig.profilePicture}
                                    alt={aboutPageConfig.meta.profilePicAlt}
                                    fill="responsive"
                                    style={{ objectFit: 'cover' }}
                                    className='rounded-2xl p-8
                                        lg:p-6 xs:p-4'
                                    priority={true}
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                            </div>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between
                            xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center
                                xl:items-center xl:text-center'>
                                <span className='inline-block text-7xl font-bold
                                    md:text-6xl sm:text-5xl xs:text-size-4xl'>
                                    <AnimatedNumbers value={aboutPageConfig.satisfiedClients} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                    md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center
                                xl:items-center xl:text-center'>
                                <span className='inline-block text-7xl font-bold
                                    md:text-6xl sm:text-5xl xs:text-size-4xl'>
                                    <AnimatedNumbers value={aboutPageConfig.projectsCompleted} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                    md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center
                                xl:items-center xl:text-center'>
                                <span className='inline-block text-7xl font-bold
                                    md:text-6xl sm:text-5xl xs:text-size-4xl'>
                                    <AnimatedNumbers value={aboutPageConfig.yearsOfExperience} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                    md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Timeline
                        data={mapExperienceToTimelineItems(experienceData)}
                        title={aboutPageConfig.experienceSectionTitle}
                    />
                    <Timeline
                        data={mapCertificationsToTimelineItems(certificationsData)}
                        title={aboutPageConfig.certificationsSectionTitle}
                    />
                </Layout>
            </main>
        </>
    )

    function mapExperienceToTimelineItems(experienceArray) {
        return experienceArray.map(item => ({
            key: `exp-${item.id}`,
            title: item.position,
            subtitle1: item.company,
            subtitle2: `${item.duration} ${item.address && `| ${item.address}`}`,
            subtitle1Link: item.companyLink,
            description: item.description,
        }));
    }

    function mapCertificationsToTimelineItems(certificationsArray) {
        return certificationsArray.map(item => ({
            key: `cert-${item.id}`,
            title: item.title,
            subtitle1: item.issuer,
            subtitle2: `${item.issueDate && `Issued: ${item.issueDate}`}`,
            subtitle3: `${item.credentialID && `Credential ID: ${item.credentialID}`}`,
            subtitle1Link: item.credentialURL,
            description: item.description,
            externalLink: item.credentialURL,
        }));
    }
}

export default about;