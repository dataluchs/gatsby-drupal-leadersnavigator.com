import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { Container, LeftSidebarContainer, RightSidebarContainer } from '../components/Global'
import styled from "styled-components"
import GlobalStyles from '../styles/GlobalStyles'
import Typed from 'react-typed';

const Knowlet = ({ data }) => {

  const knowlet = data.nodeKnowlet

  return (
    <Layout>
      <KnowletHeaderWrapper>
        <h1> <span>All about </span>
          <Typed
            strings={[knowlet.title]}
            typeSpeed={50}
          />
        </h1>
        {knowlet.relationships.field_topic.map(i => (
          <Link to={i.path.alias}>
            <p style={{
              color: '#fff',
              display: 'inline-block',
              padding: '3px 13px',
              margin: 5,
              borderRadius: 16,
              border: '1px solid #fff',
              fontSize: '0.7rem'
            }}>{i.name}</p>
          </Link>
        ))}

        {/* <h1>All about .. {knowlet.title} </h1> */}
      </KnowletHeaderWrapper>
      <GradientBorder />
      <Container>
        <InnerTextContainer>
          <div dangerouslySetInnerHTML={{ __html: knowlet.body.processed }} />
        </InnerTextContainer>

        <hr />

        <h3> Connected Articles </h3>
        <hr />
        {knowlet.relationships.field_connected_articles.map(article => (
          <Link to={article.path.alias}>
            <div style={{
              padding: 30, border: '1px solid #ddd',
              borderRadius: 8, margin: 10
            }}>
              <h5> {article.title} </h5>
              <h5> {article.created} </h5>
            </div>
          </Link>
        ))}

        <h3> Additional Content </h3>
      </Container>

    </Layout>
  )
}

Knowlet.propTypes = {
  data: PropTypes.object.isRequired,
}



export const query = graphql`
  query($KnowletId: String!) {
    nodeKnowlet(id: { eq: $KnowletId }) {
        created
        path {
            alias
        }
        id
        title
        body {
            processed
        }
        field_image {
            alt
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
`

export default Knowlet

const KnowletHeaderWrapper = styled.header`
  background: #4776E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 50px 0px;
  padding-top:180px;
  z-index:-1;
  position: relative;
  text-align: center;
  h1 {
    color:#fff;
  }
  
  @media (max-width: ${props => props.theme.screen.md}) {
  }

  @media only screen and (min-width:1440px) {
    max-height: 66vh;
  }
`

const ArticleHeaderWrapper = styled.header`
  background: #1488CC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-top:120px;
  padding-bottom: 150px;
  position: relative;
  z-index:-1;
  
  
  h1 {
    color: #fff;
    font-size:1.6rem;
    line-height:2.2rem;
    border-bottom:1px solid rgba(230,230,230,0.1);
    padding:50px 0px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    h1 {
      font-size:2.9rem;
      line-height:3.2rem;
    }
  }

  @media only screen and (min-width:1440px) {
    max-height: 66vh;
  }
`

const ArticleTitleImageWrapper = styled.div`
  display: flex;
  padding:10px;
  margin-top: -120px;
  z-index:2;

  img {
    border-radius:8px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: -10px -10px 30px 4px rgba(0,0,0,0.2),
              10px 10px 30px 4px rgba(45,78,255,0.25);
  }
`

const InnerTextContainer = styled.div`
  padding:50px 15px;
`

const TextSummaryContainer = styled.div`
  font-weight: bold;
  background: rgba(200,200,200,0.1);
  padding: 20px;
  margin-bottom: 40px;
  border-radius:8px;
  border:1px solid #ddd;
  border-left: 4px solid blue;
  line-height:1.3rem;

  h3 {
    font-size:1.4rem;
  }
`

const GradientBorder = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Raleway';
  font-size: 2.5rem;
  --borderWidth: 2px;
  position: relative;
  border-radius: var(--borderWidth);

  &:after {
    content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 5s ease alternate infinite;
  background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

  `