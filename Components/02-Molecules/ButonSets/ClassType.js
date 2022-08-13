import Head from 'next/head'
import Link from 'next/link';
import LayersButton from '../../01-Atoms/buttons/3LayerBtm';
import styled from 'styled-components';
// import { GridAutoFill } from '../../Components/04-Templetes/grids';
// import styles from '../../Components/05-Page/Classes/Classes.module.scss'

export const BtmBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 2rem;
  gap: 2rem;
  row-gap: 4rem;
  justify-content: center;

`

export default function ClassesTypeButtons() {
  return (
        <BtmBox>
          {/* <GridAutoFill> */}
            <LayersButton name="All" />
            <LayersButton name="IMAGINE" />
            <LayersButton name="OVERSEE" />
            <LayersButton name="BUILD" />
            <LayersButton name="INSPIRE" />
          {/* </GridAutoFill> */}
        </BtmBox>
  )
}
