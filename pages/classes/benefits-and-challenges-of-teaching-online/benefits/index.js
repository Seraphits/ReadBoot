import Head from 'next/head';
import Link from 'next/link';
import benefitsData from '../../../../Data/benefits-and-challenges-of-teaching-online/Benefits.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      benefitss: benefitsData,
    }, // will be passed to the page component as props
  }
}

export default function benefits(props) {
  return (
    <div >
      <Head>
        <title>benefits</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>benefits</h1>
     <p>These technologies will allow you to provide face-to-face instruction to your learners and simulate a classroom setting. Different applications will include different affordances and constraints for instruction.</p>
     <p><b>Click on each one to learn more.</b></p>
     {/* <CardFlexGrid>
      {props.benefitss.map((benefits) =>(
          <div key={benefits.techID}>
            <PicTitle imgUrl={benefits.imgUrl}
                      name={benefits.name}
                      id={benefits.techID}
            />
          </div>
        ))}
      </CardFlexGrid> */}
    </div>
  )
}
