import ClassesTypeButtons from '@/Molecules/ButonSets/ClassType';
import Head from 'next/head'
import Link from 'next/link';



export default function Inspire() {
  return (
    <div >
      <Head>
        <title>Imagine</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <header>
        <h1>Classes</h1>
        <ClassesTypeButtons/>
      </header>
     <h1>Inspire</h1>
    </div>
  )
}
