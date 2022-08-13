import Head from 'next/head'
import Link from 'next/link';
import videoChatData from '../../../../Data/ChoosingTech/VideoChat.json'

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      videoChats: videoChatData,
    }, // will be passed to the page component as props
  }
}

export default function VideoChat(props) {
  return (
    <div >
      <Head>
        <title>VideoChat</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
     <h1>VideoChat</h1>
     {props.videoChats.map((videoChat) =>(
        <div key={videoChat.techID}>
          <Link href={`/classes/choosing-your-technology/video_chat/${videoChat.techID}`}>
            <a>
              <p>{videoChat.techID}</p>
              <p>{videoChat.name}</p>
              <p>{videoChat.imgUrl}</p>

            {/* <ClassCard name={classListing.name}
                    classID={classListing.classID}
                    department={classListing.department}
                    description={classListing.description}
                    imgUrl={classListing.imgUrl}
              /> */}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
