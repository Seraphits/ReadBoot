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
  /* div {
    background-color: blueviolet;
  } */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr ;
  }
`
