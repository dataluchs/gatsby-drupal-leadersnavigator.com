import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import ArticlePreview from "../components/article/ArticlePreview"

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.edges
  console.log(articles)
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.node.id}
          title={article.node.title}
          path={article.node.path.alias}
          image={article.node.relationships.field_image.localFile.childImageSharp.fluid}
          istring={article.node.relationships.field_image.filename}
          alt={article.node.field_image.alt}
          summary={
            article.node.body.summary
              ? article.node.body.summary
              : article.node.body.processed.substring(0, 300)
          }
        />
      ))}
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle(sort: { order: DESC, fields: created }) {
      edges {
        node {
          title
          id
          body {
            summary
            processed
          }
          path {
            alias
          }
          created
          field_image {
            alt
          }
          relationships {
            field_image {
              filename
              localFile {
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
    }
  }
`

export default Articles