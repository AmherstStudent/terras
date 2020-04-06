import { FunctionComponent } from "react";
import * as React from 'react'
import Head from 'next/head'
import Footer from './base/Footer'
import ga from '../lib/ga'

type LayoutProps = {
    title?: string
    width?: "full" | "regular"
}

const Layout: React.FunctionComponent<LayoutProps> = ({children, title = 'The Amherst Student'}) => (
    <>
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Cormorant&display=swap" rel="stylesheet"/>
        <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.typekit.net/khr7xsm.css"/>
        <script dangerouslySetInnerHTML={{ __html: ga }} />
    </Head>
    <main>
        {children}
    </main>
    <Footer />
    <style jsx global>{`
        :root{
            --header-font: 'Cormorant';
            --body-text: 'URWBaskervilleW01-Regular';
            --span-font: 'halyard-text';
            --base-font-size: 18px;
            --line-height: 172%;
        }
        html{
            background: #E5E5E5;
        }
        main{
            max-width: 1180px; 
            margin: 0 auto;
            padding-bottom: 40px;
        }

        @media screen and (max-width: 1200px) {
            main {
                margin: 0 5%;
            }
        }

        h1 {
            font-family: var(--header-font);
            font-weight: 600;
        }

        p{
            color: #373A3C;
        }
        
    `} 
    </style>
    </>
) 

export default Layout;
