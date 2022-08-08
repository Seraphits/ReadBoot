import Link from 'next/link';
import React from 'react';
import styled from "styled-components";
import styles from '../../styles/01-Atoms/icon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {      faEnvelope,
              faKey }
from '@fortawesome/free-solid-svg-icons';
import { FaBeer,
  FaCloudMoon,
  FaGlasses,
  FaHammer,
  FaLightbulb } from 'react-icons/fa';


export const Card = styled.div`
  font-size: 1.5rem;
`
// This will not work with Styled component because of the hovers. will have to do in SCSS.
const IconCard = (props) => {
  return (
      <Card>
       < {${props.icon}} />
       <FaCloudMoon className={styles.icon__icon} />
       {/* <FontAwesomeIcon icon={`${props.icon}`} style={{width: '150px'}} /> */}
       <h1>Icon Card</h1>
       <h2>{props.name}</h2>
       <h2>{props.icon}</h2>
      </Card>

  )
};
export default IconCard;
