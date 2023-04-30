import React from 'react'
import Navbar from '../global/Header/Navbar'
import Footer from '../global/Footer/Footer'
import Head from 'next/head'

import { GA_TRACKING_ID } from './gtag'

export default function Page({ fullTitle, title, desc, children }: PageProps) {
  let pageTitle = fullTitle ? fullTitle : title + ' | Project Tech'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="theme-color" content="#1282FF"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" property="og:title" content={pageTitle} />
        <meta
          content="The Project Tech Foundation is a non-profit organization led by students that aims to encourage elementary and middle school students to explore computer programming at an early age. Our programs focus on developing essential creative computer science skills that are not typically taught in schools."
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta
          content="https://www.project-tech.org/img/logos/main/logo.png"
          property="og:image"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content="The Project Tech Foundation is a non-profit organization led by students that aims to encourage elementary and middle school students to explore computer programming at an early age. Our programs focus on developing essential creative computer science skills that are not typically taught in schools."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#2a65b6"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta property="og:image" content="" />
        <meta name="twitter:image" content="" /> */}
        {/* google analytics */}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KC3CN7V');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

type PageProps = {
  fullTitle?: string
  title?: string
  desc?: string
  children?: React.ReactNode
}
