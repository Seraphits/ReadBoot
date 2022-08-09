import Link from 'next/link';
import Image from 'next/image';
import styles from './ExpandableCard.module.scss'
import { getStaticProps } from '../../../pages/about';

export default function ExpandableCard(props) {
  return (
    <div  className={styles.Card} >
     <div  className={styles.imgbox} >
      <Image src={`/${props.imgUrl}`} width={180} height={180} />
     </div>
     <div  className={styles.Content} >
      <h3>{props.name}</h3>
      <h5>{props.position}</h5>
      <p>{props.description}</p>
     </div>
    </div>
  )
}

