import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Logo } from '../Components/01-Atoms/Logo'

const Header = styled.div`
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
  /* background-color:yellowgreen ; */
  font-size: 6rem;
  width: 100%;
  text-align: left;
  padding-left: 8%;
  text-shadow: .05em .05em .08em black, .08em .08em .1em white ;

  @media only screen and (max-width: 700px) {
    /* background-color: lightblue; */
    font-size: 5rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 500px) {
    /* background-color: plum; */
    font-size: 3.5rem;
  }
  span {
    /* background-color: beige; */
    display: block;
    font-size: 3rem;
    color: white;
    @media only screen and (max-width: 700px) {
      /* background-color: blue; */
      font-size: 2rem;
    }
    @media only screen and (max-width: 700px) {
      /* background-color: teal; */
      font-size: 1.5rem;
    }
  }
`
const Main = styled.main`
  /* background-color: rebeccapurple; */
  /* background-image: url(/ReadBoot.png);
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75vh; */
  padding-top: 3rem;
`

const CenterHeaderH2 = styled.div`
  /* background-color:yellowgreen ; */
  font-size: 3rem;
  width: 100%;
  text-align: center;
  padding-left: 8%;
  /* text-shadow: .05em .05em .08em black, .08em .08em .1em white ; */

  @media only screen and (max-width: 700px) {
    /* background-color: lightblue; */
    font-size: 2.5rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 500px) {
    /* background-color: plum; */
    font-size: 2rem;
  }
  span {
    /* background-color: beige; */
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

export default function Home() {
  return (
    <div >
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

        <Title><Logo>Read<span>Boot</span></Logo>
          <span>Rebooting Education</span>
        </Title>
      </Header>
      <Main >
        <CenterHeaderH2>
          <span>Check Out Our Classes</span>
          Education for the 22nd Century
        </CenterHeaderH2>
        <div >
          <div>Classes Card loop through</div>
        </div>
      </Main>

      <footer >

      </footer>
    </div>
  )
}
