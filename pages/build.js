import ClassesTypeButtons from '@/Molecules/ButonSets/ClassType';
import Head from 'next/head'
import Link from 'next/link';



export default function Build() {
  return (
    <div >
      <Head>
        <title>Build</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <header>
        <h1>Classes</h1>
        <ClassesTypeButtons/>
      </header>
     <h1>Build</h1>
    </div>
  )
}


