import Head from 'next/head'
import ClassesTypeButtons from '../../Components/02-Molecules/ButonSets/ClassType';
import { CardFlexGrid } from '@/Templetes/flex';
import ClassCard from '../../Components/02-Molecules/Cards/ClassCards'
import classListingsData from '../../Data/ClassListings.json'
import { Wrapper } from 'Components/00-Base/_utilities';

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
      <Wrapper>
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
                      description={classListing.description}
                      imgUrl={classListing.imgUrl}
                      link={`/classes/${classListing.classID}`}
                />
          </div>
            ))}
        </CardFlexGrid>
      </Wrapper>
    </div>
  )
}
