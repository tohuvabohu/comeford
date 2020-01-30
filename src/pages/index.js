import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Comeford College is a new Christian college with Kuyperian interests in Marysville, WA.</p>
    <p>Classes start Fall 2020, <em>Deo volente</em>!</p><br/>
    <h2>Inagural Information Night!</h2>
    <p>Thursday, March 19<br/>
    7:00 PM<br/>
    <a href="http://maps.google.com/maps?q=9015+44th+Dr.+NE++Marysville+WA+98270">9015 44th Dr. NE</a><br/><br/>
    Let us know you're interested (or what questions you have already) on our <a href="https://www.facebook.com/events/272804167027467/">Facebook Event Page</a>.</p>
    <hr></hr>
    <Link to="/board/">Board Members</Link><br/>
    <a href="https://fb.me/ComefordCollege">Facebook</a>&nbsp;&nbsp;<a href="https://twitter.com/ComefordCollege">Twitter</a>
  </Layout>
)

export default IndexPage


