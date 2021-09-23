import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function WhyPH({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>WHY THE PHILIPPINES CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default WhyPH

export const WhyPHPageQuery = graphql`
  query WhyPHPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
