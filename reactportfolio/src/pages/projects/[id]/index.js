import Layout from '../../../components/Layout';
import Head from 'next/head';
import { projectsData } from '../../../../data-config/projects.js';
import { contactsConfig } from '../../../../data-config/contacts.js';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import ContentRenderer from '@/components/ContentRenderer';
import { useTransform, useScroll } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Parallax from '@/components/Parallax';

const Index = ({ project }) => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

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
                        <article className='w-full flex flex-col items-center justify-center md:items-start mb-24
                            lg:mb-16 md:mb-8 sm:mb-6'>
                            <AnimatedText text={project.title} className='mb-8 md:mb-4 sm:mb-3' />

                            <div className='w-full overflow-hidden h-[600px]
                                 xl:h-[500px] lg:h-[400px] md:h-[330px] sm:h-[270px] xs:h-[225px]'>
                                <Parallax offset={100}>
                                    <div className="w-full pt-[100%]">
                                        <Image src={project.image} alt={project.title} fill="responsive" style={{ objectFit: 'cover' }}
                                            priority={true}
                                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                            className='mt-[-200px] xl:mt-[-160px] lg:mt-[-140px] md:mt-[-115px] sm:mt-[-50px] xs:mt-[-30px]'
                                        />
                                    </div>
                                </Parallax>
                            </div>
                            {project.detailsPage.map((item, index) => (
                                <ContentRenderer key={index} data={item} />
                            ))}
                        </article>
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