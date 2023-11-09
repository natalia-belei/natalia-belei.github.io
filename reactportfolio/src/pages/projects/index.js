import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { projectsPageConfig, projectsData, PREVIEW_BLOCK_SIZE } from '../../../data-config/projects.js'
import { ProjectBlock } from '../../components/ProjectBlock'

const index = () => {
    return (
        <>
            <Head>
                <title>{projectsPageConfig.meta.title}</title>
                <meta name="description" content={projectsPageConfig.meta.description} />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text={projectsPageConfig.mainTitle} className='mb-10' />

                    <div className='grid grids-cols-12 gap-24'>
                        {projectsData.map((project, index) =>
                            <div key={index} className={`${calculateBlockSizeClass(project.previewBlockSize)} relative`}>
                                <ProjectBlock
                                    title={project.title}
                                    description={project.shortDescription}
                                    img={project.image}
                                    link={`/projects/${project.id}`}
                                    calculateBlockShadowClass={`${calculateBlockShadowClass(project.previewBlockSize)}`}
                                />
                            </div>
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

function calculateBlockSizeClass(previewBlockSize) {
    return ({
        [PREVIEW_BLOCK_SIZE.wide]: "col-span-12",
        [PREVIEW_BLOCK_SIZE.narrow]: "col-span-6"
    }[previewBlockSize])
}

function calculateBlockShadowClass(previewBlockSize) {
    return ({
        [PREVIEW_BLOCK_SIZE.wide]: "0px 4px 20px rgba(0, 0, 0, 0.65)",
        [PREVIEW_BLOCK_SIZE.narrow]: "0px 4px 14px rgba(0, 0, 0, 0.65)"
    }[previewBlockSize])
}

export default index