import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  background-color: black;
  color: white;
  padding: 1rem 3rem;

`

export default function CopyRight() {
  return (
    <Card >
     <p>CopyRight @ ReadBoot 2022 </p>
    </Card>
  )
}
