import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import '../index.css'

import { ThemeProvider } from "styled-components"
import theme from "../../styles/theme"
import GlobalStyles from "../../styles/GlobalStyles"

// import fundamental components
import Navigation from '../navigation/Navigation'
import Header from '../sections/Header'
import MainFooter from '../sections/MainFooter'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Navigation />
      <div style={{
        marginTop: 100
      }}>
        {children}
      </div>
      <MainFooter />
    </>
  </ThemeProvider>
  // <StaticQuery
  //   query={graphql`
  //     query LayoutQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <div>
  //       <Helmet
  //         title={data.site.siteMetadata.title}
  //         meta={[
  //           { name: 'description', content: 'Sample' },
  //           { name: 'keywords', content: 'sample, something' },
  //         ]}
  //       />

  //       <div
  //         style={{
  //           margin: '0 auto',
  //           //            maxWidth: 960,
  //           //padding: '0px 1.0875rem 1.45rem',
  //           paddingTop: 0,
  //         }}
  //       >
  //         {children}
  //       </div>
  //       <MainFooter />
  //     </div>

  //  )}
  // />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
