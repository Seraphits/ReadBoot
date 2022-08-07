import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classListingsData from '../Data/ClassListings.json'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import styles from '../styles/01-Atoms/icon.module.scss'
import { LogoRead, LogoBoot } from '../Components/01-Atoms/Logo'
// import ClassCard from '../Components/02-Molecules/ClassCards'
// import { Flex } from '../Components/04-Templetes/flex'
import { Grid4 } from '../Components/04-Templetes/grids'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faGlasses,
            faHammer,
            faLightbulb,
          faCloudMoon }
        from '@fortawesome/free-solid-svg-icons';

const Hero = styled.div`
  background-color: #0A1108E3;
  background-image: url(/ReadBoot.png);
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75vh;
`
const Title = styled.h1`
  font-size: 6rem;
  width: 100%;
  text-align: left;
  padding-left: 8%;
  text-shadow: .05em .05em .08em black, .08em .08em .1em white ;
  @media only screen and (max-width: 700px) {
    font-size: 5rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3.5rem;
  }
  span {
    display: block;
    font-size: 3rem;
    color: white;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`
const Main = styled.main`
  padding-top: 3rem;
`
const CenterHeaderH2 = styled.div`
  font-size: 3rem;
  width: 100%;
  text-align: center;
  padding-left: 8%;
  @media only screen and (max-width: 700px) {
    font-size: 2.5rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
  span {
    display: block;
    font-size: 2rem;
    /* color: white; */
    @media only screen and (max-width: 700px) {
      /* background-color: blue; */
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 700px) {
      /* background-color: teal; */
      font-size: 1.5rem;
    }
  }
`
export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      classListings: classListingsData,
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log("props", props);
  // const { imgUrl, name, department, imgUrl } = props.classListing;
  return (
    <div >
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Title><LogoRead>Read</LogoRead><LogoBoot>Boot</LogoBoot>
          <span >Rebooting Education</span>
        </Title>
      </Hero>
      <Main >
        <CenterHeaderH2>
          Creating the Future of Education
            <span>Classes</span>
          </CenterHeaderH2>
        <Grid4>
          <Link href='/imagine'>
            <a>
              <div className={styles.icon__iconbox}>
                <FontAwesomeIcon icon={faCloudMoon} className={styles.icon__icon}  />
              </div>
              <h3>Imagine</h3>
            </a>
          </Link>
          <Link href='/oversee' >
          <a>
            <div className={styles.icon__iconbox}>
              <FontAwesomeIcon icon={faGlasses} className={styles.icon__icon}  />
            </div>
            <h3>OverSee</h3>
            </a>
          </Link>
          <Link href='/build'><a>
            <div className={styles.icon__iconbox}>
              <FontAwesomeIcon icon={faHammer} className={styles.icon__icon}  />
            </div>
            <h3>Build</h3></a>
          </Link>
          <Link href='/inpire'>
            <a>
              <div className={styles.icon__iconbox}>
                <FontAwesomeIcon icon={faLightbulb} className={styles.icon__icon}  />
              </div>
              <h3>Inpire</h3>
            </a>
          </Link>
        </Grid4>
      </Main>

      <footer >

      </footer>
    </div>
  )
}
