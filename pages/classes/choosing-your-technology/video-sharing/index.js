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
      <p>Once you start making videos for your classes, you’re going to need to be able to share them efficiently. Since mp4 files are large and difficult to share on their own, we recommend using the following sites to host your videos and then sharing a link so that your learners can access them easily.</p>
      <p>Video-sharing sites like YouTube and Vimeo are also a great place to curate videos that others have created which might be relevant to your classes.</p>
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
