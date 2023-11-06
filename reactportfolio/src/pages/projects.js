import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import projectImg1 from '../../public/images/projects/project-1.jpg'
import projectImg2 from '../../public/images/projects/project-2.jpg'
import projectImg3 from '../../public/images/projects/project-3.jpg'
import projectImg4 from '../../public/images/projects/project-4.jpg'
import projectImg5 from '../../public/images/projects/project-5.jpg'
import projectImg6 from '../../public/images/projects/project-6.jpg'
import projectImg7 from '../../public/images/projects/project-7.jpg'
import projectImg8 from '../../public/images/projects/project-8.jpg'
import projectImg9 from '../../public/images/projects/project-9.jpg'
import { PROJECT_BLOCK_SIZE } from 'data-config/projects.js'
import { projects as projectsPageConfig } from '../../data-config/projects.js'
import { ProjectBlock } from '../components/ProjectBlock'

const projects = () => {
    return (
        <>
            <Head>
                <title>{projectsPageConfig.meta.title}</title>
                <meta name="description" content={projectsPageConfig.meta.description} />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text={projectsPageConfig.mainTitle} className='mb-16' />

                    <div className='grid grids-cols-12 gap-24'>
                        {projectsPageConfig.project1.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project1.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project1.type}
                                    title={projectsPageConfig.project1.title}
                                    summary={projectsPageConfig.project1.summary}
                                    img={projectImg1}
                                    link="/1"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project1.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project2.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project2.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project2.type}
                                    title={projectsPageConfig.project2.title}
                                    summary={projectsPageConfig.project2.summary}
                                    img={projectImg2}
                                    link="/2"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project2.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project3.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project3.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project3.type}
                                    title={projectsPageConfig.project3.title}
                                    summary={projectsPageConfig.project3.summary}
                                    img={projectImg3}
                                    link="/3"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project3.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project4.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project4.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project4.type}
                                    title={projectsPageConfig.project4.title}
                                    summary={projectsPageConfig.project4.summary}
                                    img={projectImg4}
                                    link="/4"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project4.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project5.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project5.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project5.type}
                                    title={projectsPageConfig.project5.title}
                                    summary={projectsPageConfig.project5.summary}
                                    img={projectImg5}
                                    link="/5"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project5.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project6.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project6.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project6.type}
                                    title={projectsPageConfig.project6.title}
                                    summary={projectsPageConfig.project6.summary}
                                    img={projectImg6}
                                    link="/6"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project6.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project7.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project7.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project7.type}
                                    title={projectsPageConfig.project7.title}
                                    summary={projectsPageConfig.project7.summary}
                                    img={projectImg7}
                                    link="/7"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project7.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project8.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project8.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project8.type}
                                    title={projectsPageConfig.project8.title}
                                    summary={projectsPageConfig.project8.summary}
                                    img={projectImg8}
                                    link="/8"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project8.blockSize)}
                                />
                            </div>
                        )}
                        {projectsPageConfig.project9.isShown && (
                            <div className={`${calculateBlockSizeClass(projectsPageConfig.project9.blockSize)}`}>
                                <ProjectBlock
                                    type={projectsPageConfig.project9.type}
                                    title={projectsPageConfig.project9.title}
                                    summary={projectsPageConfig.project9.summary}
                                    img={projectImg9}
                                    link="/9"
                                    calculateBlockShadowClass={calculateBlockShadowClass(projectsPageConfig.project9.blockSize)}
                                />
                            </div>
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

function calculateBlockSizeClass(projectBlockSize) {
    return ({
        [PROJECT_BLOCK_SIZE.wide]: "col-span-12",
        [PROJECT_BLOCK_SIZE.narrow]: "col-span-6"
    }[projectBlockSize])
}

// TODO: Enhance shaddow
function calculateBlockShadowClass(projectBlockSize) {
    return ({
        [PROJECT_BLOCK_SIZE.wide]: "absolute top-0 -right-[1rem] -z-10 w-[101%] h-[102%] bg-dark/90 rounded-[2.5rem] rounded-br-3xl shadow-xl",
        [PROJECT_BLOCK_SIZE.narrow]: "absolute top-0 -right-[0.6rem] -z-10 w-[101%] h-[102%] bg-dark/90 rounded-[1.8rem] rounded-bl-3xl shadow-xl"
    }[projectBlockSize])
}

export default projects