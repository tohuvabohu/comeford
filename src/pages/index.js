import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>Comeford College is a Christian college with Kuyperian interests in Marysville, WA.</p>
    <p>Classes start Fall 2020, <em>Deo volente</em>!</p>
    <Link to="/board/">See the College Board Members</Link>
  </Layout>
)

export default IndexPage
