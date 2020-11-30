import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { Container } from '../components/Global'
import styled from "styled-components"


const Article = ({ data }) => {

  const post = data.nodeArticle

  return (
    <Layout>
      {/* <BackgroundImage

        fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
      >
        <h2> {post.title} </h2>
      </BackgroundImage> */}

      <ArticleHeaderWrapper>
        <Container>
          <h1> {post.title} </h1>
          <p>{post.created}</p>
        </Container>
      </ArticleHeaderWrapper >


      <Container>
        <ArticleTitleImageWrapper>
          <img
            src={post.relationships.field_image.localFile.publicURL}
            alt={post.field_image.alt}
          />
        </ArticleTitleImageWrapper>
      </Container>

      <Container>
        <InnerTextContainer>
          <TextSummaryContainer>
            <h3>Executive Summary</h3>
            <div dangerouslySetInnerHTML={{ __html: post.body.summary }} />
          </TextSummaryContainer>
          <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
        </InnerTextContainer>
      </Container>


    </Layout >
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}


export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      title
      id
      created
      body {
        summary
        processed
      }
      field_image {
        alt
      }

      relationships {
        field_image {
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
        }
      }
    }
  }
`

export default Article

const ArticleHeaderWrapper = styled.header`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23cfcfcf' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 45px 20px;
  position: relative;
  z-index:-1;
  padding-bottom:50px;
  
  h1 {
    font-size:2rem;
    line-height:2.2rem;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    padding:100px 0px;
    h1 {
      font-size:3.5rem;
      line-height:3.7rem;
    }
  }

  @media only screen and (min-width:1440px) {
    max-height: 66vh;
  }
`

const ArticleTitleImageWrapper = styled.div`
  display: flex;
  margin-top: -30px;
  z-index:2;

  img {
    border-radius:8px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.6);
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