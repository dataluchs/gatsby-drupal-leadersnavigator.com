import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const ArticlePreview = ({ title, path, image, alt, summary, istring }) => (

    <div>
        <Link to={path}>
            <h2>{title}</h2>
        </Link>
        <Img fluid={image} alt={alt} />
        <p> {istring} </p>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>

)

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    istring: PropTypes.string.isRequired
}

export default ArticlePreview