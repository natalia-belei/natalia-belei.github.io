import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { projectsData } from '../../../data-config/projects.js';
import { contactsConfig } from '../../../data-config/contacts.js';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import ContentRenderer from '@/components/ContentRenderer';
import { motion, useTransform, useScroll } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

//TODO: fix reload bug on mobile devices
export default function Project() {
    const router = useRouter();
    const { id } = router.query;

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const project = projectsData.find((p) => p.isShown && p.id === Number(id));

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
                            <AnimatedText text={project.title} className='mb-16 md:mb-8 sm:mb-6' />

                            <motion.div className="relative w-full h-auto pb-[35%] mb-8
                                md:pb-[45%] md:mb-6 sm:mb-5 xs:mb-4" style={{ scale }}>
                                <Image src={project.image} alt={project.title} fill="responsive"
                                    style={{ objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.65)' }}
                                    priority={true}
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                />
                            </motion.div>
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