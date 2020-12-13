import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import Navigation from "../components/navigation/Navigation"
import Header from "../components/sections/Header"
import DefinitionList from '../components/definition/DefinitionList'
import MainFooter from '../components/sections/MainFooter'
import Carousel from '../components/carousel/Carousel'

import TransitionLink from 'gatsby-plugin-transition-link'
import KnowletsList from '../components/sections/KnowletsList'


const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <KnowletsList />


      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/articles">Go to articles</Link>


    </Layout>
  )

}


export default IndexPage
