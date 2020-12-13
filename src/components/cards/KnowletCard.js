import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"

const KnowletCard = ({ title, description, image, path }) => {
    return (

        <KnowletCardWrapper>
            <KnowletImageWrapper>
                <img src={image} />
            </KnowletImageWrapper>
            <KnowletContent>
                <h4> {title} </h4>
            </KnowletContent>
        </KnowletCardWrapper>
    )
}



KnowletCard.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}



export default KnowletCard

const KnowletCardWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 9px;
    box-shadow: 0 3px 18px 2px rgba(2,2,2,0.14);
    padding: 7px 15px;
    h4 {
        font-size: 0.8rem;
        margin-bottom:0px;
    }
    max-width:400px;
    margin:8px;
    transition: 0.3s ease-in-out;
    &:hover {
        background: red!important;
    }
`

const KnowletImageWrapper = styled.div`
    width:0%;    
    img {
        width:100%;
        height: auto;
    }   
`

const KnowletContent = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;    
`

const KnowletLinkWrapper = styled.a`
    text-decoration: none;
    color: #111;
    transition: 0.3s ease-in-out;
    &:hover {
        background: red;
    }
`

