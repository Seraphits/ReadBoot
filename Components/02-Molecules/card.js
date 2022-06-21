import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from "styled-components";

const Card = (props) => {
  return (
    <div>

    <br/>
      {props.classID} <br/>
      {props.name} <br/>
      {props.department} <br/>
      {props.imgUrl} <br/>
    </div>
  )
};
export default Card;
