import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function IndustryNews({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>INDUSTRY NEWS CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default IndustryNews

export const IndustryNewsPageQuery = graphql`
  query IndustryNewsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
