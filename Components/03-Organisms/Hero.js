import styled, { css } from 'styled-components'

const Hero = css`
  height: 80vh;
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 1100px) {
    height: 80vw;
  }
`

export const HeroHome = styled.div`
  ${Hero};
  background-color: #0A1108E3;
  background-image: url(/ReadBoot.png);
  background-position: right;
  flex-direction: row;
  background-size: 60%;
`

export const HeroAbout = styled.div`
  ${Hero};
  background-color: aquamarine;
  background-image: url("/images/MainPages/Girl-Holding-World.jpg");
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    height: 80vh;
  }
`
export const HeroAboutTeam = styled.div`
  ${Hero};
  background-color: aquamarine;
  background-image: url("images/MainPages/stones-gf85571872_1920.jpg");
  justify-content: center;
  padding: 5rem;
  height: auto;

`
