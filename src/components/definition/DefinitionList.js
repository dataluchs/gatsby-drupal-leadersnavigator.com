import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../Global"
import DefinitionCard from './DefinitionCard'

const DefinitionList = () => {

    const data = useStaticQuery(graphql`
        {
  allNodeDefinitions {
    nodes {
      title
      id
      created
      body {
        processed
        summary
      }
    }
  }
}
  `)

    const definitions = data.allNodeDefinitions.nodes
    return (
        <DefinitionListWrapper id="top">
            <Container>
                {definitions.map(definition => (
                    <DefinitionCard
                        key={definition.id}
                        title={definition.title}
                        summary={
                            definition.body.summary
                                ? definition.body.summary
                                : definition.body.processed.substring(0, 300)
                        }
                    />
                ))}
            </Container>
        </DefinitionListWrapper>

    )
}

// DefinitionList.propTypes = {
//     data: PropTypes.object.isRequired,
// }

// export const data = graphql`
//   {
//     allNodeDefinitions(sort: { order: DESC, fields: created }) {

//         nodes {
//           title
//           id
//           body {
//             summary
//             processed
//           }
//           created
//           }        
//         }

//     }

// `

export default DefinitionList


const DefinitionListWrapper = styled.div`
    padding:20px;
    margin-top:-100px;
    z-index:5
`