import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

const Article = ({ data }) => {

    const post = data.nodeArticle

    return (
        <Layout>
            <BackgroundImage
                fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
            >
                <h2> {post.title} </h2>
            </BackgroundImage>
            <h1> {post.title} </h1>
            <img
                src={post.relationships.field_image.localFile.publicURL}
                alt={post.field_image.alt}
            />
            <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
        </Layout>
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