import { Grid2 } from '@/Templetes/grids';
import Head from 'next/head'
import Link from 'next/link';
import styled, { css } from 'styled-components';

export default function BCTO() {
  return (
    <div >
      <Head>
        <title>Benefits and Challenges of Teaching Online</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <Header>
        <H1>Benefits and Challenges of Teaching Online</H1>
      </Header>
      <Wrapper>
        <div>
          <h2>Teaching online can be rewarding and fun!</h2>
          <p>It allows people to learn from the comfort of their own homes and connect with other people on a language learning journey all around the world. It also allows the instructor to reach learners through many different mediums, such as</p>
          <ul>
            <li>
              live video chat
            </li>
            <li>
              previously recorded videos
            </li>
            <li>
              collaborative learning assignments
            </li>
            <li>
            tools for multimedia discussion
            </li>
          </ul>
          <p>Technology allows us to further our educational mission by bringing together more learners.</p>
          <p>Having said that, online teaching poses a few challenges just like teaching in-person does. Many teachers report a lack of student engagement online, since they are not in class with you and their peers. As a teacher, you will need to break the impersonal feeling that online classes sometimes have, which can cause students to lose interest in them.</p>
          <p>In this course, we will help you to overcome some of the common obstacles encountered in online classes.</p>
        </div>
        <div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-l5KcasL7-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <p>Watch the video for more information. </p>
        </div>
      </Wrapper>
      <Grid2>
        <BenefitsBox>
          <Link href='/classes/benefits-and-challenges-of-teaching-online/benefits'>
            <a>
              <h2>Benefits</h2>
              <p>Of Online Classes</p>
            </a>
          </Link>
        </BenefitsBox>
        <ChallengesBox>
          <Link href='/classes/benefits-and-challenges-of-teaching-online/challenges'>
            <a>
              <h2>Challenges</h2>
              <p>Of Online Classes</p>
            </a>
          </Link>
        </ChallengesBox>
      </Grid2>
    </div>
  )
}

export const Header = styled.header`
  width: 100vw;
  height: 20rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:
    url(../images/Classes/Build/BenefitsAndChallengesOfOnlineTeaching/empty-classroom.jpg);
  justify-content: space-between; //vertical alignment because of flex direction column
  align-items: center; //horizontal alignment because of flex direction column
`
export const H1 = styled.h1`
  color: white;
  text-shadow: 4px 4px 4px black, -1px -1px 4px red;
  text-align: center;
  padding: 3rem;
  font-size: 3rem;
  @media only screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`
export const Wrapper = styled.div`
  margin: 3rem;
  @media only screen and (max-width: 1000px) {
    margin: 3rem;

  }
  @media only screen and (max-width: 700px) {
    margin: 3rem;

  }
`
export const Box = css`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 5rem;
`
export const BenefitsBox = styled.div`
  background-color: #CEE0ED;
  ${Box}
`
export const ChallengesBox = styled.div`
  background-color: #EDCECE;
  ${Box}
`
