import Head from 'next/head'
import Link from 'next/link';



export default function Tech() {
  return (
    <div >
      <Head>
        <title>Technologies for Teaching Online</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>Technologies for Teaching Online</h1>
     <p>Technology opens the door to some exciting new ways to learn new things. As an online instructor, you well be using many of the the following types of technologies.</p>
     <Link href="/classes/choosing-your-technology/video-chat">
        <a  >Video Chat</a>
      </Link>
    </div>
  )
}
