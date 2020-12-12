import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"
import ButtonCard from '../Global'

const DefinitionCard = ({ title, path, image, alt, summary, istring }) => (
    <DefinitionContainerWrapper>
        <div>
            <Link to={path}>
                <h3>{title}</h3>
            </Link>
            <Img fluid={image} alt={alt} />

            <p>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
            </p>
            <Link to='#'>
                <ButtonCard>
                    Explore
                </ButtonCard>
            </Link>
        </div>
    </DefinitionContainerWrapper>
)

DefinitionCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default DefinitionCard

const DefinitionContainerWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding:20px;
  margin:30px;
  box-shadow: 0 8px 26px -6px rgba(0,0,0,0.1);
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }

  h3  {
      font-size:1.1rem;
      font-weight:bold;
      line-height:1.3rem;
  }
  
  p {
      font-size:0.8rem!important;
  }
`