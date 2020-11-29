const path = require("path")
const { graphql } = require("gatsby")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // create pages for blog posts
  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          title
          id
          created
          body {
            processed
          }
          field_image {
            alt
          }
          path {
            alias
          }
        }
      }
    }
  `)

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      },
    })
  )
}



