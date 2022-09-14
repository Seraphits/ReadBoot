import ClassesTypeButtons from '@/Molecules/ButonSets/ClassType';
import Head from 'next/head'
import Link from 'next/link';



export default function Oversee() {
  return (
    <div >
      <Head>
        <title>Oversee</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <header>
        <h1>Classes</h1>
        <ClassesTypeButtons/>
      </header>
     <h1>Oversee</h1>
    </div>
  )
}
