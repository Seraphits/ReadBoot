import Link from 'next/link';
import Image from 'next/image';
import styles from './ExpandableCard.module.scss'

export default function ExpandableCard() {
  return (
    <div  className={styles.Card} >
     <div  className={styles.imgbox} >
      <Image src="/images/OurTeam/Zach.png" width={180} height={180} />
     </div>
     <div  className={styles.Content} >
      <h3>Zack Hill</h3>
      <h5>Vice president</h5>
      <p>Zach is a certified foreign language learning instructor and teaches at the Institute for Intensive English, or IIE. </p>
     </div>
    </div>
  )
}

