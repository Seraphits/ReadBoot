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
     <p>One of the key advantages of teaching classes online is that it is very easy to display prepared presentations and multimedia content in the classroom with no fussy AV cables or projectors. By designing and creating their own presentations, teachers can engage their students with relevant and custom-made content and add a visual element to break up the monotony of faces in boxes. These presentations can then be adjusted and re-used in future classes, which reduces the teachers’ class preparation time. </p>
     <p>We do not recommend, however, simply uploading several presentations to a learning management system and letting your learners work through them on their own. A presentation in an online class really needs to be digested with other kinds of instructional media, and the opportunity for dialogue between teacher and student.</p>
     <p>Below are some great tools for preparing your own presentations.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {/* {props.presentations.map((presentation) =>(
          <div key={presentation.techID}>
            <PicTitle imgUrl={presentation.imgUrl}
                      name={presentation.name}
                      id={presentation.techID}
            />
          </div>
        ))} */}
      </CardFlexGrid>
    </div>
  )
}
