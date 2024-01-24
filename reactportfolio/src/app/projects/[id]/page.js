import Layout from '@/app/_shared-components/Layout';
import { getProject, getProjectIds } from '../../../../data-config/projects';
import { contactsConfig } from '../../../../data-config/contacts';
import AnimatedText from '@/app/_shared-components/AnimatedText';
import ContentRendererFactory from '../_components/ContentRendererFactory';
import config from '../../../../config';
import TransitionEffect from '@/app/_shared-components/TransitionEffect';
import ProjectsNavBar from '../_components/ProjectsNavBar';

export async function generateMetadata({ params }) {
    const project = getProject(params.id);

    return {
        title: `${contactsConfig.ownerFullName} | ${project.title}`,
        description: project.shortDescription?.substring(0, 160),
    }
}

export default function ProjectPage({ params }) {
    const project = getProject(params.id);
    const { prevId, nextId } = getPrevNextIds(params.id);

    if (project) {

        const factory = new ContentRendererFactory();
        const ContentRenderer = factory.createRenderer(config.contentRenderingStyle);

        return (
            <>
                <TransitionEffect />
                <main className='w-full flex items-start'>
                    <Layout>
                        <article className='w-full min-h-[45vh] flex flex-col items-center justify-start
                            mb-16 xl:mb-12 lg:mb-10 md:mb-8 sm:mb-6'>

                            <AnimatedText text={project.title} className='mb-8 md:mb-4 sm:mb-3' />
                            {ContentRenderer && <ContentRenderer data={project.detailsPage} />}
                        </article>
                        <ProjectsNavBar
                            prevId={prevId}
                            nextId={nextId}
                        />
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

const getPrevNextIds = (currentId) => {
    const ids = getProjectIds();
    const currentIndex = ids.indexOf(parseInt(currentId));
    return {
        prevId: ids[currentIndex - 1],
        nextId: ids[currentIndex + 1],
    }
}

// TODO: Resolve the problem to return a 404 error for dynamic routes
export async function generateStaticParams() {
    return getProjectIds().map((id) => ({ id: id.toString() }));
}