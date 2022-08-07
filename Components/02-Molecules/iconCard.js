import Link from 'next/link';
import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {      faEnvelope,
              faKey }
from '@fortawesome/free-solid-svg-icons';



export const IconCard = styled(Link)`
  font-size: 1.5rem;
`
// This will not work with Styled component because of the hovers. will have to do in SCSS.
// const IconCard = (props) => {
//   return (
//       <Card>
//        <FontAwesomeIcon icon={`${props.icon}`} style={{width: '150px'}} />
//        <h1>Icon Card</h1>
//        <h2>{props.name}</h2>
//        <h2>{props.icon}</h2>
//       </Card>

//   )
// };
// export default IconCard;
