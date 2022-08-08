import styled, { css } from 'styled-components'

const Hero = css`
  height: 80vh;
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;
  background-size: cover;
`

export const HeroHome = styled.div`
  ${Hero};
  background-color: #0A1108E3;
  background-image: url(/ReadBoot.png);
  background-position: right;
  flex-direction: row;
  background-size: 50%;
`

export const HeroAbout = styled.div`
  ${Hero};
  background-color: aquamarine;
  background-image: url("/images/MainPages/Girl-Holding-World.jpg");
  justify-content: center;
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
