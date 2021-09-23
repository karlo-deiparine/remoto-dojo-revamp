import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function Footprint({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>FOOTPRINT CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default Footprint

export const FootprintPageQuery = graphql`
  query FootprintPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
