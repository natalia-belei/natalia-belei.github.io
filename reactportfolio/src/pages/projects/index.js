import Head from 'next/head';
import React, { useRef } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { projectsPageConfig, projectsData } from '../../../data-config/projects.js';
import { ProjectPreview } from '../../components/ProjectPreview.js';

const index = () => {
    return (
        <>
            <Head>
                <title>{projectsPageConfig.meta.title}</title>
                <meta name="description" content={projectsPageConfig.meta.description} />
            </Head>
            <main className='w-full flex flex-col items-start justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text={projectsPageConfig.mainTitle} className='mb-16 md:mb-8 sm:mb-6' />

                    <div className='grid grid-cols-12 gap-24 mb-8
                        xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 sm:gap-y-16'>
                        {projectsData.map((project, index) =>
                            <div key={index} className={`${index % 2 === 0 && index === projectsData.length - 1 ? 'col-span-12' : 'col-span-6'}
                                2xl:col-span-12`}>
                                <ProjectPreview
                                    type={project.type}
                                    title={project.title}
                                    description={project.shortDescription}
                                    img={project.image}
                                    link={`/projects/${project.id}`}
                                />
                            </div>
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default index