const path = require("path")
const { graphql } = require("gatsby")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // create pages for blog posts
  const articles = await graphql(`
    {
      allNodeArticle {
        edges {
          node {
            id
            title
            path {
              alias
            }
            body {
              processed
              summary
            }
            field_image {
              alt
              title
            }
          }
        }
      }
    }
  `)

  articles.data.allNodeArticle.edges.map(articleData =>
    createPage({
      path: articleData.node.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.node.id,
      },
    })
  )
}



