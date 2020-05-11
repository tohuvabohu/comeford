import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Comeford College is a new Christian college with Kuyperian interests in Marysville, WA.</p>
    <p>Classes start Fall 2020, <em>Deo volente</em>!</p><br/>
    <h2>Inaugural Information Night</h2>
    <p><strong>Take Two! - May 19</strong><br/>
    Via Zoom<br/>
    7:00 PM<br/><br/>
    Let us know you're interested (or what questions you have already) on our <a href="https://www.facebook.com/events/236429261027529/">Facebook Event Page</a>.</p>
    <hr></hr>
    <Link to="/board/">Board Members</Link><br/>
    <a href="https://fb.me/ComefordCollege">Facebook</a>&nbsp;&nbsp;<a href="https://twitter.com/ComefordCollege">Twitter</a>
  </Layout>
)

export default IndexPage