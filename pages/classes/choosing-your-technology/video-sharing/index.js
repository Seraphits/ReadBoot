import Head from 'next/head';
import Link from 'next/link';
import videoSharingData from '../../../../Data/ChoosingTech/VideoSharing.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      videoSharings: videoSharingData,
    }, // will be passed to the page component as props
  }
}

export default function VideoSharing(props) {
  return (
    <div >
      <Head>
        <title>Video Sharing</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>Video Sharing</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {props.videoSharings.map((videoSharing) =>(
          <div key={videoSharing.techID}>
            <PicTitle imgUrl={videoSharing.imgUrl}
                      name={videoSharing.name}
                      id={videoSharing.techID}
            />
          </div>
        ))}
      </CardFlexGrid>
    </div>
  )
}
