import styled from 'styled-components'

export const Hero = styled.div`
  background-color: #0A1108E3;
  background-image: url(/ReadBoot.png);
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75vh;
`
export const Title = styled.h1`
  font-size: 6rem;
  width: 100%;
  text-align: left;
  padding-left: 8%;
  text-shadow: .05em .05em .08em black, .08em .08em .1em white ;
  @media only screen and (max-width: 700px) {
    font-size: 5rem;
    padding-left: 5%;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3.5rem;
  }
  span {
    display: block;
    font-size: 3rem;
    color: white;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`
