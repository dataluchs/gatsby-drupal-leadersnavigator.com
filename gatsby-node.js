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


  // create pages for blog posts
  const knowlets = await graphql(`
   {
    allNodeKnowlet {
      nodes {
        created
        id
        field_image {
          alt
          title
        }
        title
        path {
          alias
        }
        relationships {
          field_topic {
            id
            name
            path {
              alias
            }
          }
          field_connected_articles {
            title
            id
            created
            path {
              alias
            }
          }
        }
      }
    }
   }
 `)

  knowlets.data.allNodeKnowlet.nodes.map(knowletData =>
    createPage({
      path: knowletData.path.alias,
      component: path.resolve(`src/templates/knowlet.js`),
      context: {
        KnowletId: knowletData.id,
      },
    })
  )


  // // create pages for definitions
  // const definitions = await graphql(`
  //   {
  //     allNodeDefinitions {
  //       nodes {
  //         title
  //         id
  //         created
  //         body {
  //           processed
  //           summary
  //         }
  //       }
  //     }
  //   }
  // `)

  // definitions.data.allNodeDefinitions.nodes.map(definitionData =>
  //   createPage({
  //     path: definitionsData.path.alias,
  //     component: path.resolve(`src/templates/definition.js`),
  //     context: {
  //       DefinitionId: definitionData.id,
  //     },
  //   })
  // )
}



