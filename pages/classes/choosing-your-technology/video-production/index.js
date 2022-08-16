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
     <p>One benefit of teaching online is to produce your own instructional videos, which can be used during class or assigned as homework to watch outside of class. There are many wonderful tools to create and edit your own video recordings for your class. This can be an engaging and creative way to present new material to your learners through video. </p>
     <p>Now a word of caution when creating videos to use in your class. These videos should be short and engaging, with lots of visuals.Please be careful not to just drone on in front of your computer screen and create videos that are a bit too long for the average learner to pay attention to. If you can use music without overpowering the narration or distracting from the subject matter, please do so.  </p>
     <p>Here are some tools you can explore for making your own videos.</p>
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
