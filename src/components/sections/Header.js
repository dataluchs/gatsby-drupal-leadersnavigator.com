import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../Global"
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';


const Header = () => {

  return (
    <HeaderWrapper id="top">
      <a href="/"> testlink </a>
      <Link to="/contact/">Contact</Link>
      <Container>
        <Flex>
          <HeaderTextGroup>
            {/* <Subtitle> </Subtitle> */}

            <h1> Your knowledge hub <br />
                        for <span>
                <Typed
                  strings={
                    [" Digital Leadership.",
                      " Digital Innovation.",
                      " Digital Workplace.",
                      " Digital Transformation.",
                      " Digital Business Models.",
                      " Digital Business Automation.",
                      " Digital Business Analysis.",
                      " Digital Technology.",
                      " Data-Driven Business.",
                    ]}
                  typeSpeed={50}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                  smartBackspace
                />
              </span>
            </h1>
          </HeaderTextGroup>
        </Flex>
      </Container>

    </HeaderWrapper>

  )
}

export default Header


const HeaderWrapper = styled.header`
  background: #4776E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 100px 0px;
  padding-top:150px;
  z-index:-1;
  position: relative;
  h1 {
    color:#111;
  }
  
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
    line-height: 3.1rem;
    font-size: 2.4rem;
    font-weight: 900;
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
