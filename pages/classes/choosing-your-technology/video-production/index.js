import Head from 'next/head';
import Link from 'next/link';
import videoProductionData from '../../../../Data/ChoosingTech/VideoProduction.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      videoProductions: videoProductionData,
    }, // will be passed to the page component as props
  }
}

export default function VideoProduction(props) {
  return (
    <div >
      <Head>
        <title>Video Production</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>Video Production</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {props.videoProductions.map((videoProduction) =>(
          <div key={videoProduction.techID}>
            <PicTitle imgUrl={videoProduction.imgUrl}
                      name={videoProduction.name}
                      id={videoProduction.techID}
            />
          </div>
        ))}
      </CardFlexGrid>
    </div>
  )
}
