import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'

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
  /* background-color: aqua; */
  font-size: 6rem;
  width: 100%;
  text-align: left;
  padding-left: 5rem;

  span {
    /* background-color: beige; */
    display: block;
    font-size: 3rem;
    color: white;
  }
`
const Logo = styled.div`
  /* background-color: peru; */
  color: red;
  span {
   display: inline-block;
   color: white;
   font-size: inherit;
  }
`
// const Header = styled.span`
//   background-color: red;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   height: 75vh;
// `

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
      <main >
        <h2>
          <span>Check Out Our Classes</span>
          <span>Education for the 22nd Century</span>
        </h2>
        <div >
          <div>Classes Card loop through</div>
        </div>
      </main>

      <footer >

      </footer>
    </div>
  )
}
