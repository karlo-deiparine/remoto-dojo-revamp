import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function Blog({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>BLOG CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default Blog

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
