import Head from 'next/head'
// import Link from 'next/link';
// import LayersButton from '../../Components/01-Atoms/buttons/3LayerBtm';
import ClassesTypeButtons from '../../Components/02-Molecules/ButonSets/ClassType';
// import ClassesGrid from '../../Components/03-Organisms/ClassGrid';
import { CardFlexGrid } from '../../Components/04-Templetes/flex';
import ClassCard from '../../Components/02-Molecules/Cards/ClassCards'
import classListingsData from '../../Data/ClassListings.json'
// import { GridAutoFill } from '../../Components/04-Templetes/grids';
import styles from '../../Components/05-Page/Classes/Classes.module.scss'

export async function getStaticProps(context) {
  console.log("getStaticProps runs here");
  return {
    props: {
      classListings: classListingsData,
    }, // will be passed to the page component as props
  }
}

export default function Classes(props) {
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
      {props.classListings.map((classListing) =>(
            <div key={classListing.classID}>
            <ClassCard name={classListing.name}
                    classID={classListing.classID}
                    department={classListing.department}
                    imgUrl={classListing.imgUrl}
              />

        </div>
          ))}
      </CardFlexGrid>
      </div>
    </div>
  )
}
