import '@/styles/globals.css';
import Head from "next/head";
//import Nav from '../components/Nav'
import { SessionProvider } from 'next-auth/react';
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import { useSession } from 'next-auth/react'
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {

  return (
      <>
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                crossOrigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                  crossOrigin="anonymous"/>
      </Head>
      <SessionProvider session={pageProps.session}>

          {Component.auth ? (
              <Auth>
                  <Component {...pageProps} />
                  <Layout {...pageProps}></Layout>
              </Auth>
          ) : (
              <Component {...pageProps} />
          )}
      </SessionProvider>
      </>
  )
}

function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })

    if (status === "loading") {
        return <div>Loading...</div>
    }

    return children
}
