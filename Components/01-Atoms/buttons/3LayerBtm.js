import Head from 'next/head'
import Link from 'next/link';
import styles from './3LayerBtm.module.scss'


export default function LayersButton(props) {
  return (
    <div >
    <Link href="/classes" >
      <a className={styles.btm3Layers}>{props.name}</a>
    </Link>

    </div>
  )
}
