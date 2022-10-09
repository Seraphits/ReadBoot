import Head from 'next/head'
import Link from 'next/link';
import PicTitle from '../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '@/Templetes/flex';
import { Grid3 } from '@/Templetes/grids';



export default function Tech() {
  return (
    <div >
      <Head>
        <title>Technologies for Teaching Online</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <h1>Technologies for Teaching Online</h1>
      <p>Technology opens the door to some exciting new ways to learn new things. As an online instructor, you well be using many of the the following types of technologies.</p>
     {/* <Link href="/classes/choosing-your-technology/video-chat">
        <a  >Video Chat</a>
      </Link> */}
      <Grid3>
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/video chat.jpg'
          title="Video Chat"
          link="/classes/choosing-your-technology/video-chat"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/video editing.jpg'
          title="Video Production"
          link="/classes/choosing-your-technology/video-production"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/video-sharing.jpg'
          title="Video Sharing"
          link="/classes/choosing-your-technology/video-sharing"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/multimedia-discussion.jpg'
          title="Multimedia Discussion"
          link="/classes/choosing-your-technology/multimedia-discussion"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/presentation.jpg'
          title="Presentation"
          link="/classes/choosing-your-technology/presentation"
        />
      </Grid3>
    </div>
  )
}
