import LayersButton from '../../01-Atoms/buttons/3LayerBtm';
import styled from 'styled-components';

export default function ClassesTypeButtons() {
  return (
        <BtmBox>
          {/* <GridAutoFill> */}
            <LayersButton name="All" to="/classes" />
            <LayersButton name="IMAGINE" to="/imagine"/>
            <LayersButton name="OVERSEE" to="/oversee"/>
            <LayersButton name="BUILD" to="/build"/>
            <LayersButton name="INSPIRE" to="/inspire"/>
          {/* </GridAutoFill> */}
        </BtmBox>
  )
}

export const BtmBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 2rem;
  gap: 2rem;
  row-gap: 4rem;
  justify-content: center;
   background-color: green;
`
