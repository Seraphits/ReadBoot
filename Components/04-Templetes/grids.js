import styled from "styled-components";

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  padding: 0;
  justify-items: center;
  padding: 2rem;
  div {
    /* background-color: blueviolet; */
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr ;
  }
`
export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  padding: 0;
  justify-items: center;
  padding: 2rem;
  /* background-color: aquamarine; */
  /* div {
    background-color: blueviolet;
  } */
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr ;
  /* background-color: khaki; */
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr ;
  /* background-color: blueviolet; */
  }
`

export const GridAutoFill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 150px));
  grid-gap: 2rem;
  background-color: blue;
  padding: 2rem;
`
