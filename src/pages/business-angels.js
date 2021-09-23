import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function BusinessAngels({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>BUSINESS ANGELS CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default BusinessAngels

export const BusinessAngelsPageQuery = graphql`
  query BusinessAngelsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
