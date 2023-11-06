import Head from 'next/head'
import React from 'react'
import config from 'config.js'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECT_BLOCK_SIZE } from 'config.js'
import projectImg1 from '../../public/images/projects/project-1.jpg'
import projectImg2 from '../../public/images/projects/project-2.jpg'
import projectImg3 from '../../public/images/projects/project-3.jpg'
import projectImg4 from '../../public/images/projects/project-4.jpg'
import projectImg5 from '../../public/images/projects/project-5.jpg'
import projectImg6 from '../../public/images/projects/project-6.jpg'
import projectImg7 from '../../public/images/projects/project-7.jpg'
import projectImg8 from '../../public/images/projects/project-8.jpg'
import projectImg9 from '../../public/images/projects/project-9.jpg'

// TODO: import images dynamically

const ProjectWideBlock = ({ type, title, summary, img, link, calculateBlockShadowClass }) => {
    return (
        <article className='relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl
           border border-solid border-dark bg-light shadow-2xl p-12'>

            <div className={calculateBlockShadowClass} />

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-8'>
                <span className='text-primary font-medium text-xl'>{type}</span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex self-end'>
                    <Link href={link} target="_blank"
                        className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        About the Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>{config.pages.projects.meta.title}</title>
                <meta name="description" content={config.pages.projects.meta.description} />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text={config.pages.projects.mainTitle} className='mb-16' />

                    <div className='grid grids-cols-12 gap-24'>
                        {config.pages.projects.project1.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project1.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project1.type}
                                    title={config.pages.projects.project1.title}
                                    summary={config.pages.projects.project1.summary}
                                    img={projectImg1}
                                    link="/1"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project1.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project2.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project2.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project2.type}
                                    title={config.pages.projects.project2.title}
                                    summary={config.pages.projects.project2.summary}
                                    img={projectImg2}
                                    link="/2"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project2.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project3.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project3.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project3.type}
                                    title={config.pages.projects.project3.title}
                                    summary={config.pages.projects.project3.summary}
                                    img={projectImg3}
                                    link="/3"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project3.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project4.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project4.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project4.type}
                                    title={config.pages.projects.project4.title}
                                    summary={config.pages.projects.project4.summary}
                                    img={projectImg4}
                                    link="/4"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project4.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project5.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project5.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project5.type}
                                    title={config.pages.projects.project5.title}
                                    summary={config.pages.projects.project5.summary}
                                    img={projectImg5}
                                    link="/5"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project5.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project6.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project6.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project6.type}
                                    title={config.pages.projects.project6.title}
                                    summary={config.pages.projects.project6.summary}
                                    img={projectImg6}
                                    link="/6"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project6.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project7.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project7.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project7.type}
                                    title={config.pages.projects.project7.title}
                                    summary={config.pages.projects.project7.summary}
                                    img={projectImg7}
                                    link="/7"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project7.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project8.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project8.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project8.type}
                                    title={config.pages.projects.project8.title}
                                    summary={config.pages.projects.project8.summary}
                                    img={projectImg8}
                                    link="/8"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project8.blockSize)}
                                />
                            </div>
                        )}
                        {config.pages.projects.project9.isShown && (
                            <div className={`${calculateBlockSizeClass(config.pages.projects.project9.blockSize)}`}>
                                <ProjectWideBlock
                                    type={config.pages.projects.project9.type}
                                    title={config.pages.projects.project9.title}
                                    summary={config.pages.projects.project9.summary}
                                    img={projectImg9}
                                    link="/9"
                                    calculateBlockShadowClass={calculateBlockShadowClass(config.pages.projects.project9.blockSize)}
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