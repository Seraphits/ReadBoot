import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Card =  styled.div`
  background-color: white;
  ${'' /* display: flex; */}
  margin: 2rem;
  width: fit-content;
  box-shadow: 0 30px 30px rgba(0,0,0,0.5);
  text-align: center;
  border-radius: 1rem;
`
const PicBox =  styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`

export default function PicTitle(props) {
  return (
    // <Link href={`${props.href}`}><a>
      <Card>
        <PicBox>
          {/* <Image src={`${props.imgUrl}`} layout='fill' /> */}
        </PicBox>
        <h3>{props.name}</h3>
      </Card>
    // </a></Link>
  )
}
