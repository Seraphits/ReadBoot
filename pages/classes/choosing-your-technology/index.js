import Head from 'next/head'
import Link from 'next/link';
import PicTitle from '../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../Components/04-Templetes/flex';



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
      <CardFlexGrid>
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/MultimediaDiscussion/multimedia-discussion.jpg'
          name="Video Chat"
          href="/classes/choosing-your-technology/video-chat"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/MultimediaDiscussion/multimedia-discussion.jpg'
          name="Video Production"
          href="/classes/choosing-your-technology/video-production"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/MultimediaDiscussion/multimedia-discussion.jpg'
          name="Video Sharing"
          href="/classes/choosing-your-technology/video-sharing"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/MultimediaDiscussion/multimedia-discussion.jpg'
          name="Multimedia Discussion"
          href="/classes/choosing-your-technology/multimedia-discussion"
        />
        <PicTitle imgUrl='/images/Classes/Build/ChoosingYourTechnology/MultimediaDiscussion/multimedia-discussion.jpg'
          name="Presentation"
          href="/classes/choosing-your-technology/presentation"
        />
      </CardFlexGrid>
    </div>
  )
}
