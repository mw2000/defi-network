import React from 'react'
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="language" content="en" />

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta property="og:url" content="http://thedefi.network/" />
                <meta property="og:title" content="Defi Network LLC — We build digital products & apps on the blockchain." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/social.png" />
                <meta property="og:description" content="Defi Network LLC — We build digital products & apps on the blockchain." />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://thedefi.network/" />
                <meta property="twitter:title" content="Defi Network LLC" />
                <meta property="twitter:description" content="Defi Network LLC — We build digital products & apps on the blockchain." />
                <meta property="twitter:image" content="/social.png" />

            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title: 'Defi Network LLC',
    keywords: 'blockchain, defi, finance, bitcoin, etherium, web3, ',
    description: "We’re The Defi Network. We build digital products & apps on the blockchain. The Defi Network is a global blockchain product team."
}


export default Meta
