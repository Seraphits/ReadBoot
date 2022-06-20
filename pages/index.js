import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>ReadBoot
          <span>Rebooting Education</span>
        </h1>
      </header>
      <main className={styles.main}>
        <h2>
          <span>Check Out Our Classes</span>
          <span>Education for the 22nd Century</span>
        </h2>
        <div className={styles.grid}>
          <div>Classes Card loop through</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
