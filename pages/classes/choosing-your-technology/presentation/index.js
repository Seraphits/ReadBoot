import Head from 'next/head';
import Link from 'next/link';
import presentationData from '../../../../Data/ChoosingTech/Presentation.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      presentations: presentationData,
    }, // will be passed to the page component as props
  }
}

export default function presentation(props) {
  return (
    <div >
      <Head>
        <title>Presentation</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>Presentation</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {props.presentations.map((presentation) =>(
          <div key={presentation.techID}>
            <PicTitle imgUrl={presentation.imgUrl}
                      name={presentation.name}
                      id={presentation.techID}
            />
          </div>
        ))}
      </CardFlexGrid>
    </div>
  )
}
