// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"

// import Layout from "../components/layout/Layout"
// import BackgroundImage from "gatsby-background-image"



// const Definition = ({ data }) => {

//     const definition = data.nodeArticle
//     return (
//         <Layout>
//             {/* <BackgroundImage

//         fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
//       >
//         <h2> {post.title} </h2>
//       </BackgroundImage> */}
//             <h1> {definition.title} </h1>
//             {/* <img
//         src={definition.relationships.field_image.localFile.publicURL}
//         alt={definition.field_image.alt}
//       /> */}
//             <div dangerouslySetInnerHTML={{ __html: definition.body.processed }} />
//         </Layout>
//     )
// }

// Definition.propTypes = {
//     data: PropTypes.object.isRequired,
// }


// export const query = graphql`
//   query($DefinitionId: String!{) 
//     nodeArticle(id: { eq: $DefinitionId }) {
//       title
//       id
//       created
//       body {
//         processed
//       }
//   }
// `

// export default Definition
