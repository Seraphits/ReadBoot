import Head from 'next/head';
import Link from 'next/link';
import multimediaDiscussionData from '../../../../Data/ChoosingTech/MultimediaDiscussion.json';
import PicTitle from '../../../../Components/02-Molecules/Cards/PicTitleCard';
import { CardFlexGrid } from '../../../../Components/04-Templetes/flex';

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      videoChats: multimediaDiscussionData,
    }, // will be passed to the page component as props
  }
}

export default function MultiMedia(props) {
  return (
    <div >
      <Head>
        <title>MultiMedia Discussion</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>MultiMedia Discussion</h1>
     <p>One challenge of online classes is that it can sometimes be difficult to give students enough time to speak and opportunities to express themselves in class. As Paolo Friere said, “if the system does not permit dialogue, the system must be changed” and any English teacher knows that for an educational experience to be valuable there must be the opportunity for the students to interact with their teacher and other students. The following tools for facilitating Multimedia Discussion help to overcome this challenge.</p>
     <p>Also, students may feel comfortable expressing themselves in a variety of different ways, so offering multiple mediums for self-expression, such as text, video, audio, and images, can be helpful and engaging.</p>
     <p><b>Click on each one to learn more.</b></p>
     <CardFlexGrid>
      {/* {props.videoChats.map((videoChat) =>(
          <div key={videoChat.techID}>
            <PicTitle imgUrl={videoChat.imgUrl}
                      name={videoChat.name}
                      id={videoChat.techID}
            />
          </div>
        ))} */}
      </CardFlexGrid>
    </div>
  )
}
