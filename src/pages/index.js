import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome!</h2>
    <p>Comeford College is a Christian college with Kuyperian interests in Marysville, WA.</p>
    <p>Classes start Fall 2020, <em>Deo volente</em>!</p>
    <h2>Inagural Information Night!</h2>
    <p>Thursday, March 19</p>
    <p>7:00 PM</p>
    <p><a href="http://maps.google.com/maps?q=9015+44th+Dr.+NE++Marysville+WA+98270">9015 44th Dr. NE</a></p>
    <p>Let us know you're interested (or what questions you have already) on our <a href="https://www.facebook.com/events/272804167027467/">Facebook Event Page</a></p>
    <hr></hr>
    <Link to="/board/">See the College Board Members</Link>
    <Link to="https://fb.me/ComefordCollege">Facebook</Link>
    <Link to="https://twitter.com/ComefordCollege">Twitter</Link>
  </Layout>
)

export default IndexPage
