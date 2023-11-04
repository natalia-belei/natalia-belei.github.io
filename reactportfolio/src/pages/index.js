import Layout from '@/components/Layout'
import Head from 'next/head'
import designerPic from "../../public/images/profile/designer-pic-1.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

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
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target='blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark'
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:yourmail@gmail.com" target='blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact Me</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
