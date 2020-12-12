import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../Global"
import DefinitionCard from './DefinitionCard'

const ArticleGrid = () => {

    const data = useStaticQuery(graphql`
        {
        allNodeArticle {
            edges {
                node {
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
    }
  `)

    const articles = data.allNodeArticle.edges
    return (
        <DefinitionListWrapper id="top">
            <Container>
                {articles.map(article => (
                    <DefinitionCard
                        key={article.node.id}
                        title={article.node.title}
                        summary={
                            article.node.body.summary
                                ? article.node.body.summary
                                : article.node.body.processed.substring(0, 300)
                        }
                    />
                ))}
            </Container>
        </DefinitionListWrapper>

    )
}


export default ArticleGrid


const ArticleGridWrapper = styled.div`
    padding:20px;
    margin-top:-100px;
    z-index:5
`