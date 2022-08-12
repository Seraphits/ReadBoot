import Head from 'next/head'
// import Link from 'next/link';
// import LayersButton from '../../Components/01-Atoms/buttons/3LayerBtm';
import ClassesTypeButtons from '../../Components/02-Molecules/ButonSets/ClassType';
// import ClassesGrid from '../../Components/03-Organisms/ClassGrid';
import { CardFlexGrid } from '../../Components/04-Templetes/flex';
import ClassCard from '../../Components/02-Molecules/Cards/ClassCards'
// import { GridAutoFill } from '../../Components/04-Templetes/grids';
import styles from '../../Components/05-Page/Classes/Classes.module.scss'


export default function Classes() {
  return (
    <div>
      <Head>
        <title>Classes</title>
        <meta name='keywords' content='ReadBoot'/>
      </Head>
      <div className={styles.Wrapper__Article}>
      <header>
        <h1>Classes</h1>
        <ClassesTypeButtons/>
      </header>
      <h2>All Classes</h2>
      <CardFlexGrid>
        <ClassCard  name="Colors Of Learning"
                    description="Colors of different learning types"

        />
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
      </CardFlexGrid>
      </div>
    </div>
  )
}
