import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../Global"

const Header = () => {


  //     const data = useStaticQuery(graphql`
  //     query {
  //       file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 1000) {
  //             ...GatsbyImageSharpFluid_tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   `)


  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            {/* <Subtitle> </Subtitle> */}
            <h1> Your knowledge hub <br />
                        for Digital Transformation</h1>
          </HeaderTextGroup>
        </Flex>
      </Container>

    </HeaderWrapper>

  )
}

export default Header


const HeaderWrapper = styled.header`
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  position: relative;
  
  @media (max-width: ${props => props.theme.screen.md}) {
  }

  @media only screen and (min-width:1440px) {
    max-height: 66vh;
  }
`


const HeaderTitleContainer = styled.div`
  padding:50px 0px;
`


const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 100%;
    margin-bottom: -300px;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    padding-top:10px;
    line-height: 3.6rem;
    font-size: 3rem;
    font-weight: 300;
    color: ${props => props.theme.color.white.regular};
     @media only screen and (max-width:480px) {
    font-size: 1.7rem;
    line-height:1.9rem;
  }
  }

  h2 {
    margin-bottom: 70px;
    padding-bottom: 50px;
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.white.regular};
    @media only screen and (max-width:480px) {
    font-size: 1rem;
  }
  }

  h5 {
    padding-top:130px;
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: flex;
  padding:20px 0px;
  text-align:center;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`


const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`