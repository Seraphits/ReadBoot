import Head from 'next/head'
import Link from 'next/link';
import styles from '../Components/05-Page/About.module.scss';
import { HeroAbout, HeroAboutTeam, Title } from '../Components/03-Organisms/Hero';
import { Grid3 } from '../Components/04-Templetes/grids';
import ExpandableCard from '../Components/02-Molecules/Cards/ExpandableCard';
import OurTeamData from '../Data/OurTeam.json'

export async function getStaticProps(context) {
  // console.log("getStaticProps runs here");
  return {
    props: {
      teamMembers: OurTeamData,
    }, // will be passed to the page component as props
  }
}

export default function About(props) {
  // console.log("getStaticProps runs here");
  return (
    <div >
      <Head>
        <title>About ReadBoot</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <HeroAbout >
        <h1 className={styles.Hero__H1__About }   >
          <span>Imagining, Inspiring and Overseeing<br/>the Future of Education Together</span>
          ReadBoot
        </h1>
      </HeroAbout>
      <article className={styles.Wrapper__Article } >
        <h2 className={styles.Centered} >About Us</h2>
        <p>ReadBoot is a not for profit organization dedicated to improving education through educator training and research. We have a special passion for analyzing current trends in education and creating strategic solutions for the educational system in the US. We are incurable optimists and idealists who envision a brighter future for education. This brighter future will come about only through sincere effort, trial and error, collaboration among many groups of people, and outside the box thinking. We seek to bring our vision to life through teacher training, providing information about instructional technology, and fostering dialogue and debate about pedagogy in K-12 and higher education. Our ultimate goal is to empower society with new pedagogies that will enable every learner to reach their desired educational goals and enrich their lives through the light of knowledge.</p>
        <h2 className={styles.Centered} >History</h2>
        <p>Our founder Nicole Trapp is a trained and passionate futurist with a Master’s degree in Foresight from the University of Houston. ReadBoot was born out of her passionate vision for a better educational system for our kids and young adults. Nicole eventually enrolled in a second master’s degree to help her integrate technology more clearly into her vision. She enrolled in the MS in Learning Design and Technology program at the University of South Florida in 2020,  where she met Jeff Ramon and Zach Hill. They worked so well together on a class project that they became friends and soon Jeff and Zach embraced Nicole’s passion for pedagogical reform in education. They decided to form a not for profit together dedicated to creating a stronger educational system through pedagogical reform and the strategic use of instructional technology.</p>
      </article>
      <HeroAboutTeam>
        <h2 className={styles.Hero__H2__About} >Our Team</h2>
        <Grid3>
            {props.teamMembers.map((teamMember) =>(
              <div key={teamMember.memberID} >
                <ExpandableCard name={teamMember.name}
                                position={teamMember.position}
                                imgUrl={teamMember.imgUrl}
                                description={teamMember.description}
                                />
              </div>
            ))}
          </Grid3>
      </HeroAboutTeam>

    </div>
  )
}
