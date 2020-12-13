import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { MainContainerWrapper, Container, LeftSidebarContainer, RightSidebarContainer } from '../components/Global'
import styled from "styled-components"


const Knowlet = ({ data }) => {

    const knowlet = data.nodeKnowlet

    return (

        <div>
            <Container>
                <h1> {knowlet.title} </h1>
            </Container>
            <Container>
                <InnerTextContainer>
                    <div dangerouslySetInnerHTML={{ __html: knowlet.body.processed }} />
                </InnerTextContainer>
            </Container>
        </div>
    )
}

Knowlet.propTypes = {
    data: PropTypes.object.isRequired,
}



export const query = graphql`
  query($KnowletId: String!) {
    nodeKnowlet(id: { eq: $KnowletId }) {
        created
        path {
            alias
        }
        id
        title
        body {
            processed
        }
        field_image {
            alt
        }
    }
  }
`

export default Knowlet

const DefinitionContainer = styled.div`
  padding: 30px;
  border: 1px solid rgb(221, 221, 221);
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 9px;
  box-shadow: 4px 4px 10px rgba(150,150,150,0.2);
  margin-top: -60px;

  h3 {
    font-size:1.1rem;
    line-height: 1.2rem;
  }
  p {
    font-size: 0.9rem;
  }  
`

const ArticleHeaderWrapper = styled.header`
  background: #1488CC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-top:120px;
  padding-bottom: 150px;
  position: relative;
  z-index:-1;
  
  
  h1 {
    color: #fff;
    font-size:1.6rem;
    line-height:2.2rem;
    border-bottom:1px solid rgba(230,230,230,0.1);
    padding:50px 0px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    h1 {
      font-size:2.9rem;
      line-height:3.2rem;
    }
  }

  @media only screen and (min-width:1440px) {
    max-height: 66vh;
  }
`

const ArticleTitleImageWrapper = styled.div`
  display: flex;
  padding:10px;
  margin-top: -120px;
  z-index:2;

  img {
    border-radius:8px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: -10px -10px 30px 4px rgba(0,0,0,0.2),
              10px 10px 30px 4px rgba(45,78,255,0.25);
  }
`

const InnerTextContainer = styled.div`
  padding:50px 15px;
`

const TextSummaryContainer = styled.div`
  font-weight: bold;
  background: rgba(200,200,200,0.1);
  padding: 20px;
  margin-bottom: 40px;
  border-radius:8px;
  border:1px solid #ddd;
  border-left: 4px solid blue;
  line-height:1.3rem;

  h3 {
    font-size:1.4rem;
  }
`