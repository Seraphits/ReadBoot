import Head from 'next/head';
import '../styles/globals.scss'
import { GlobalStyle } from '../Components/Layout/global.styles';
import Layout from '../Components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/image/logos/favicon.ico" />
      </Head>
      <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
