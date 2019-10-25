import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BoardPage = () => (
  <Layout>
    <SEO title="Board" />
    <h1>Board</h1>
    <h2>President</h2>
    <p>Jim Martin</p>
    <h2>Members</h2>
    <p>Mark Callender</p>
    <p>John Giddings</p>
    <p>Sean Higgins</p>
    <p>Philip Kulishov</p>
    <p>Jonathan Sarr</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BoardPage
