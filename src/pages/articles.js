import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/article/ArticlePreview"

const Articles = ({ data }) => {
    const articles = data.allNodeArticle.nodes
    return (
        <Layout>
            <SEO title="Articles" />
            <h1>Articles</h1>
            {articles.map(article => (
                <ArticlePreview
                    key={article.id}
                    title={article.title}
                    path={article.path.alias}
                    image={article.relationships.field_image.localFile.childImageSharp.fluid}
                    istring={article.relationships.field_image.filename}
                    alt={article.field_image.alt}
                    summary={
                        article.body.summary
                            ? article.body.summary
                            : article.body.processed.substring(0, 300)
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
        nodes {
          title
          id
          body {
            summary
            processed
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
          path {
            alias
          }
        }
      }
    }
  `

export default Articles