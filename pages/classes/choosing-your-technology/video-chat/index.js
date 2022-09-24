import Head from 'next/head';
import Link from 'next/link';
import videoChatData from '../../../../Data/ChoosingTech/VideoChat.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

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
     {/* <CardFlexGrid> */}
      {/* {props.videoChats.map((videoChat) =>(
          <div key={videoChat.techID}>
            <PicTitle imgUrl={videoChat.imgUrl}
                      name={videoChat.name}
                      id={videoChat.techID}
            />
          </div>
        ))}
      </CardFlexGrid> */}
    </div>
  )
}
