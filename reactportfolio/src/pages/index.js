import Layout from '@/components/Layout'
import Head from 'next/head'
import designerPic from "../../public/images/profile/designer-pic-1.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <>
      <Head>
        <title>UI/UX Designer Portfolio</title>
        <meta name="description" content="UI/UX Designer Portfolio" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={designerPic} alt="UI/UX designer" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1></h1>
              <AnimatedText text="Transforming Vision Into Reality Through Design" className='!text-left !text-6xl' />
              <p className='my-4 text-base font-medium'>
                As an accomplished UI/UX designer, I am committed to transforming concepts into captivating web experiences. Dive into my recent projects and articles, highlighting my proficiency in creating engaging user interfaces and user experiences
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
