import AnimatedText from '../_shared-components/AnimatedText';
import Layout from '../_shared-components/Layout';
import { getProjects, projectsPageConfig } from '../../../data-config/projects';
import { ProjectPreview } from './_components/ProjectPreview';
import TransitionEffect from '../_shared-components/TransitionEffect';

export const metadata = {
    title: projectsPageConfig.meta.title,
    description: projectsPageConfig.meta.description
}

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <>
            <TransitionEffect />
            <main className='w-full flex flex-col items-start justify-center'>
                <Layout>
                    <AnimatedText text={projectsPageConfig.mainTitle} className='mb-16 md:mb-8 sm:mb-6' />

                    <div className='grid grid-cols-12 gap-24 mb-8
                        3xl:gap-16 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 sm:gap-y-16'>
                        {projects.map((project, index) =>
                            <div key={index} className={`${index % 2 === 0 && index === projects.length - 1 ? 'col-span-12' : 'col-span-6'}
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