import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from "styled-components";

// const Backing = styled.div`
//   background-color: #0A1108E3;
//   margin: 0%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
const Card = styled.div`
  background-color: black;
  background-image: url("/images/MainPages/Girl-Holding-World.jpg");
  position: relative;
  width: 300px;
  height: 400px;
  box-shadow: 0 30px 30px rgba(0,0,0,0.5);
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;
  background-size: cover;
`
const Heading3 = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: 25px;
`
const Paragraph = styled.p`
  width: 80%;
  margin: 10px auto;
  font-size: 16px;
  transition: all .5s;
`
const ImageBox = styled.div`
  /* background-image: url("/images/MainPages/Girl-Holding-World.jpg");
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;
  background-size: cover; */
  background-color: aquamarine;
`
const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 90px;
  /* height: 80px; */
  background-color: white;
  left: 10%;
  text-align: center;
  transition: all .5s;
  overflow: hidden;
  &:hover {
    height: 100%;
    width: 100%;
    left: 0%;
  }
`
// This will not work with Styled component because of the hovers. will have to do in SCSS.
const ClassCard = (props) => {
  return (
      <Card>
        {/* <ImageBox> */}
          {/* <Image
          src="/images/MainPages/Girl-Holding-World.jpg"
          alt="Picture of the author"
          width={1000}
          height={500}
        /> */}
        <Content>
          <Heading3>{props.name}</Heading3>
          <Paragraph>{props.description}</Paragraph>
          <Link href='#'><a>Take Class</a></Link>
          {/* <Link href={`/classes/${props.classID}`}><a>Take Class</a></Link> */}
        </Content>
         {/* <br/>
        <br/>
        {props.department} <br/>
        {props.imgUrl} <br/> */}
    {/* </ImageBox> */}
      </Card>

  )
};
export default ClassCard;
