import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BoardPage = () => (
  <Layout>
    <SEO title="Board" />
    <h1>Board</h1>
    <h2>President</h2>
    <p>Jim Martin <a href="mailto:jimngail4@gmail.com">Email</a></p>
    <h2>Members</h2>
    <p>Mark Callender <a href="mailto:mark.callender@quantivate.com">Email</a></p>
    <p>John Giddings <a href="mailto:jwgidd@gmail.com">Email</a></p>
    <p>Sean Higgins <a href="mailto:seankhiggins@gmail.com">Email</a></p>
    <p>Philip Kulishov <a href="mailto:kulishov.philip@gmail.com">Email</a></p>
    <p>Jonathan Sarr <a href="mailto:jonathansarr@gmail.com">Email</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BoardPage
