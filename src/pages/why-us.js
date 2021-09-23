import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function WhyUS({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>WHY US CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default WhyUS

export const WhyUSPageQuery = graphql`
  query WhyUSPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
