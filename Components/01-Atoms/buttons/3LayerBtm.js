import Link from 'next/link';
import styles from './3LayerBtm.module.scss'


export default function LayersButton(props) {
  return (
    <div >
    <Link href={props.to} >
      <a className={styles.btm3Layers}>{props.name}</a>
    </Link>

    </div>
  )
}
