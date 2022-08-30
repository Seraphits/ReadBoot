import Head from 'next/head';
import Link from 'next/link';
import ChallengesData from '../../../../Data/benefits-and-challenges-of-teaching-online/Challenge.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      challenges: ChallengesData,
    }, // will be passed to the page component as props
  }
}

export default function challenge(props) {
  return (
    <div >
      <Head>
        <title>challenge</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>challenge</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {props.challenges.map((challenge) =>(
          <div key={challenge.techID}>
            <PicTitle imgUrl={`benefits-and-challenges-of-teaching-online/${challenge.imgUrl}`}
                      name={challenge.name}
                      id={challenge.techID}
                      // href={challenge.techID}
            />
          </div>
        ))}
      </CardFlexGrid>
    </div>
  )
}
