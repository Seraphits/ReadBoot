import styled from "styled-components";

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: auto;
  padding: 0;

  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: auto;
    padding: 0;
  }
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: auto;
    padding: 0;;
  }
`
