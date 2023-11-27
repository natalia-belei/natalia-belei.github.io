import Layout from '../../../components/Layout';
import Head from 'next/head';
import { projectsData } from '../../../../data-config/projects.js';
import { contactsConfig } from '../../../../data-config/contacts.js';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import TransitionEffect from '@/components/TransitionEffect';
import ParallaxEffect from '@/components/ParallaxEffect';
import ScrollSlideUpContentRenderer from '@/components/ContentRenderers/ScrollSlideUpContentRenderer';

const Index = ({ project }) => {
    if (project) {
        return (
            <>
                <Head>
                    <title>{`${contactsConfig.ownerFullName} | ${project.title}`}</title>
                    <meta name="description" content={`${(project.shortDescription).substring(0, 160)}`} />
                </Head>
                <TransitionEffect />
                <main className='w-full flex items-start justify-center'>
                    <Layout className="pt-16 sm:pt-8">
                        <div className='container mx-auto
                             max-w-5xl 2xl:max-w-3xl md:max-w-full md:mx-0'>
                            <article className='w-full flex flex-col items-center justify-center mb-24 
                            lg:mb-16 md:mb-8 sm:mb-6 md:items-start'>
                                <AnimatedText text={project.title} className='mb-8 md:mb-4 sm:mb-3' />

                                <div className='flex flex-col justify-center overflow-hidden mb-4 w-full h-[65vh]
                                xl:h-[60vh] lg:h-[55vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh]
                                xl:mb-3 md:mb-2 xs:mb-1'>
                                    <ParallaxEffect offset={100}>
                                        <div className='w-full h-full'>
                                            <div className='relative w-full pt-[100%] 
                                            lg:pt-[110%] md:pt-[120%] sm:pt-[130%] xs:pt-[135%]'>
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill="responsive"
                                                    style={{ objectFit: 'cover' }}
                                                    priority={true}
                                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                                />
                                            </div>
                                        </div>
                                    </ParallaxEffect>
                                </div>

                                {project.detailsPage.map((item, index) => (
                                    <ScrollSlideUpContentRenderer key={index} data={item} />
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
            <Head>
                <title>Project not found</title>
                <meta name="description" content="Project not found" />
            </Head>
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

export default Index;

export async function getStaticPaths() {
    const paths = projectsData.map((project) => ({
        params: { id: project.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { id } = params;

    const project = projectsData.find((p) => p.isShown && p.id === Number(id));

    return {
        props: {
            project,
        },
    };
}