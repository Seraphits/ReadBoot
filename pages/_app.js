import Head from 'next/head';
import '../Components/globals.scss'
import { GlobalStyle } from '../Components/Layout/global.styles';
import Layout from '../Components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/ branding/favicon.ico" />
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
