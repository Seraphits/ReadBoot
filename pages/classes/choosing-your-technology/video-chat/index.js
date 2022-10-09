import Head from 'next/head';
import Link from 'next/link';
import videoChatData from '../../../../Data/ChoosingTech/VideoChat.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';
import { Grid3 } from '@/Templetes/grids';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      videoChats: videoChatData,
    }, // will be passed to the page component as props
  }
}

export default function VideoChat(props) {
  return (
    <div >
      <Head>
        <title>VideoChat</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>VideoChat</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     <Grid3>
       {props.videoChats.map((videoChat) =>(
          // <div >
            <PicTitle imgUrl={videoChat.imgUrl}
                      title={videoChat.name}
                      id={videoChat.techID}
                      link={`/classes/choosing-your-technology/video-chat/${videoChat.techID}`}
                      key={videoChat.techID}
            />
          // </div>
        ))}
      </Grid3>
    </div>
  )
}
