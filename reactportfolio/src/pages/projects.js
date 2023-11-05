import Head from 'next/head'
import React from 'react'
import config from 'config.js'


const projects = () => {
    return (
        <>
            <Head>
                <title> {config.pages.projects.meta.title}</title>
                <meta name="description" content={config.pages.projects.meta.description} />
            </Head>
        </>

    )
}

export default projects