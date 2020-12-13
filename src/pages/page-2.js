import React from 'react'
//import Layout from '../components/layout/layout'
import { Link } from 'gatsby'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <a href="/"> testlink </a>
  </div>
)

export default SecondPage
