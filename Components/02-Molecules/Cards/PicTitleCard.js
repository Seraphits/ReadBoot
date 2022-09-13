import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';


export default function PicTitle(props) {
  return (
    // <Link href={`${props.href}`}><a>
      <Card>
        <PicBox>
          {/* <Image src={`${props.imgUrl}`} layout='fill' objectFit='cover' /> */}
        </PicBox>
        <h3>{props.title}</h3>
      </Card>
    // </a></Link>
  )
}

const Card =  styled.div`
  /* background-color: red; */
  background-color: white;
  margin: 2rem;
  width: 100%;
  box-shadow: 0 30px 30px rgba(0,0,0,0.5);
  text-align: center;
  border-radius: 1rem;
`
const PicBox =  styled.div`
  position: relative;
  width: 80%;
  height: 250px;
  margin: 2rem auto;
  border-radius: 2rem;
  overflow: hidden;
`
