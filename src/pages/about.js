import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

function About({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <h1>ABOUT CONTENT GOES HERE</h1>
    </Layout>
  )
}

export default About

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
