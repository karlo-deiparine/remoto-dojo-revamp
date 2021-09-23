import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"
import Header from "@components/header"
import HomeBanner from "@components/home-header/home-banner"

const IndexPage = ({ data }) => {
  const subTitle = `Your IT Staffing Solutions & Recruitment Experts`

  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <div className="relative">
        <Header siteTitle={`${data.site.siteMetadata.title} | ${subTitle}`} />
        <HomeBanner />
      </div>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
