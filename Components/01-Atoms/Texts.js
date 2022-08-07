import styled from "styled-components";

export const CenterHeaderH2 = styled.div`
  font-size: 3rem;
  width: 100%;
  text-align: center;
  padding-left: 8%;
  @media only screen and (max-width: 780px) {
    font-size: 2.3rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 580px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 300px) {
    font-size: 1.7rem;
  }
  span {
    display: block;
    font-size: 2rem;
    /* color: white; */
    @media only screen and (max-width: 780px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 580px) {
      font-size: 1.3rem;
    }
  }
`
