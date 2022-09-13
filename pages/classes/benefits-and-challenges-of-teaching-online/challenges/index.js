import Head from 'next/head';
// import Link from 'next/link';
import ChallengesData from '/Data/benefits-and-challenges-of-teaching-online/Challenges.json';
import PicTitle from "@/Molecules/Cards/PicTitleCard";
import { Grid3 } from '@/Templetes/grids';



export default function challenge(props) {
  const { cards } = props;
  return (
    <div >
      <Head>
        <title>challenge</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>challenge</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     {/* <CardFlexGrid>
      {props.challenges.map((challenge) =>(
          <div key={challenge.techID}>
            <PicTitle imgUrl={`benefits-and-challenges-of-teaching-online/${challenge.imgUrl}`}
                      name={challenge.name}
                      id={challenge.techID}
                      // href={challenge.techID}
            />
          </div>
        ))}
      </CardFlexGrid> */}
         <Grid3>
         {cards.map((card) => (
        //  <div key={card.ID} >{card.name} - {card.imgUrl} </div>
         <PicTitle key={card.ID} title={card.name} imgUrl={card.imgUrl} />
        ))}
      </Grid3>
    </div>
  )
}
export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      cards: ChallengesData,
    }, // will be passed to the page component as props
  }
}
