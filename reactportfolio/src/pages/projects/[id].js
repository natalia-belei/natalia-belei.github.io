import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { projectsData } from '../../../data-config/projects.js';
import { contactsConfig } from '../../../data-config/contacts.js';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import ParagraphList from '@/components/ParagraphList';
import { motion, useTransform, useScroll } from 'framer-motion';

export default function Project() {
    const router = useRouter();
    const { id } = router.query;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const project = projectsData.find((p) => p.id === Number(id));

    if (project) {
        const { scrollYProgress } = useScroll();
        const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

        return (
            <>
                <Head>
                    <title>{`${contactsConfig.ownerFullName} | ${project.title}`}</title>
                    <meta name="description" content={`${(project.shortDescription || project.fullDescription.join(' ')).substring(0, 160)}`} />
                </Head>
                <main className='w-full flex items-center justify-center'>
                    <Layout className="pt-16">
                        <article className='w-full flex flex-col items-center justify-center'>
                            <AnimatedText text={project.title} className='mb-16' />

                            <motion.div className="relative w-full h-auto pb-[35%]" style={{ scale }}>
                                <Image src={project.image} alt={project.title} fill="responsive"
                                    style={{ objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.65)' }} />
                            </motion.div>

                            <ParagraphList paragraphs={project.fullDescription} />
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
                <Layout className="pt-16">
                    <h1 className='font-medium text-3xl'>Project not found.</h1>
                    <p>The project you are looking for does not exist.</p>
                </Layout>
            </main>
        </>
    );
}