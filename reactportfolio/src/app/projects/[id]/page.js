import Layout from '@/app/_shared-components/Layout';
import { projectsData } from '../../../../data-config/projects';
import { contactsConfig } from '../../../../data-config/contacts';
import AnimatedText from '@/app/_shared-components/AnimatedText';
import ContentRendererFactory from '../_components/ContentRendererFactory';
import config from '../../../../config';
import TransitionEffect from '@/app/_shared-components/TransitionEffect';

export async function generateMetadata({ params }) {
    const project = getProject(params.id);

    return {
        title: `${contactsConfig.ownerFullName} | ${project.title}`,
        description: project.shortDescription?.substring(0, 160),
    }
}

export default function ProjectPage({ params }) {
    const project = getProject(params.id);

    if (project) {
        const factory = new ContentRendererFactory();
        const ContentRenderer = factory.createRenderer(config.contentRenderingStyle);

        return (
            <>
                <TransitionEffect />
                <main className='w-full flex items-start justify-center'>
                    <Layout className="pt-16 sm:pt-8">
                        <div className='container mx-auto
                             max-w-5xl 2xl:max-w-3xl md:max-w-full md:mx-0'>
                            <article className='w-full flex flex-col items-center justify-center mb-24 
                            lg:mb-16 md:mb-8 sm:mb-6 md:items-start'>
                                <AnimatedText text={project.title} className='mb-8 md:mb-4 sm:mb-3' />

                                {ContentRenderer && project.detailsPage.map((item, index) => (
                                    <ContentRenderer key={index} data={item} />
                                ))}
                            </article>
                        </div>
                    </Layout>
                </main>
            </>
        );
    }

    return (
        <>
            <main className='w-full flex items-center justify-center'>
                <Layout className="pt-16 sm:pt-8">
                    <h1 className='font-medium text-3xl
                        md:text-2xl sm:text-xl xs:text-lg'>
                        Project not found.</h1>
                    <p>The project you are looking for does not exist.</p>
                </Layout>
            </main>
        </>
    );
}

const getProject = (id) => {
    return projectsData.find((p) => p.isShown && p.id === Number(id));
}

// TODO: Resolve the problem to return a 404 error for dynamic routes
export async function generateStaticParams() {
    return projectsData.map((project) => ({ id: project.id.toString() }));
}