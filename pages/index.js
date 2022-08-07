import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classListingsData from '../Data/ClassListings.json'
import styled from 'styled-components'
import { Hero, Title } from '../Components/03-Organisms/Hero'
import { Container } from '../Components/Layout/Spacing'
import { CenterHeaderH2 } from '../Components/01-Atoms/Texts'
import styles from '../styles/01-Atoms/icon.module.scss'
import { LogoRead, LogoBoot } from '../Components/01-Atoms/Logo'
import { Grid4 } from '../Components/04-Templetes/grids'

import { FaCloudMoon,
        FaGlasses,
        FaHammer,
        FaLightbulb } from 'react-icons/fa';

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
      <Container >
        <CenterHeaderH2>
          Creating the Future of Education
            <span>Classes</span>
          </CenterHeaderH2>
        <Grid4>
          <Link href='/imagine'>
            <a>
              <div className={styles.icon__iconbox}>
              <FaCloudMoon className={styles.icon__icon} />
                {/* <FontAwesomeIcon icon={faCloudMoon} className={styles.icon__icon}  />.  */}
              </div>
              <h3>Imagine</h3>
            </a>
          </Link>
          <Link href='/oversee' >
          <a>
            <div className={styles.icon__iconbox}>
              <FaGlasses className={styles.icon__icon} />
              {/* <FontAwesomeIcon icon={faGlasses} className={styles.icon__icon}  /> */}
            </div>
            <h3>OverSee</h3>
            </a>
          </Link>
          <Link href='/build'><a>
            <div className={styles.icon__iconbox}>
              <FaHammer className={styles.icon__icon} />
              {/* <FontAwesomeIcon icon={faHammer} className={styles.icon__icon}  /> */}
            </div>
            <h3>Build</h3></a>
          </Link>
          <Link href='/inspire'>
            <a>
              <div className={styles.icon__iconbox}>
                <FaLightbulb className={styles.icon__icon} />
                {/* <FontAwesomeIcon icon={faLightbulb} className={styles.icon__icon}  /> */}
              </div>
              <h3>Inspire</h3>
            </a>
          </Link>
        </Grid4>
      </Container>

      <footer >

      </footer>
    </div>
  )
}
