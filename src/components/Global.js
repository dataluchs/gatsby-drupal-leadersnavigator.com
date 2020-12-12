import styled from "styled-components"


export const FullWidthSection = styled.div`
    width:100%;
    height: auto;
    padding:20px 0px;
`

export const LeftSidebarContainer = styled.div`
  max-width: 250px;
  border-right:1px solid rgba(0,0,0,0.1);
  padding-right: 20px;
`

export const RightSidebarContainer = styled.div`
  max-width: 250px;
  border-left:1px solid rgba(0,0,0,0.1);
  padding-left: 20px;
`

export const MainContainerWrapper = styled.div`
  max-width: 1440px;
  display:flex;
  margin: 0 auto;
`



export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 36px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 900px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`


export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${props.accent === "secondary"
      ? props.theme.color.white.dark
      : props.theme.color.primary
    }`};
`


export const ButtonCard = styled.button`
    padding:7px 15px;
    border:1px solid blue;
    background: lightblue;
`