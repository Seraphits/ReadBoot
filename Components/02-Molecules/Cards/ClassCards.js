import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from "styled-components";

const Card =  styled.a`
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
    <Link href={`/classes/${props.classID}`}>
      <Card>
        <Image src={props.imgUrl} alt="Image" layout='fill'/>
        <Content>
          <Heading3>{props.name}</Heading3>
          <Paragraph>{props.description}</Paragraph>
          <Link href='#'><a>Take Class</a></Link>
        </Content>

      </Card>
    </Link>
  )
};
export default ClassCard;
