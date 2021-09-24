import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
        <div id="who-we-are">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
              <StaticImage src="../images/who-we-are.png" alt="Who We Are?" />
            </div>
            <div>
              <div>
                <h3>Who Are We?</h3>
                <h2>What's Remotodojo?</h2>
              </div>
              <div>
                <div></div>
                <div>
                  <p>
                    At RemotoDojo, we believe that every entrepreneur, every
                    company, no matter the size, should be able to get their{" "}
                    <span>IT staffing needs</span> handled and see their ideas
                    realized. Their business optimized. We also believe in
                    building a place where technological professionals of all
                    skill levels and specialties can practice their trade and
                    develop themselves both professionally and personally.
                  </p>
                  <p>
                    Maybe you havethe greatest business processing idea in the
                    history of mankind, but your doodles are about as intuitive
                    as an Apple II and you need IT staffing. Maybe your company
                    has one of thos little websites that looks like it was made
                    using Geocities in 2001. It was fine then, but now terms
                    like Backend Integration and <span>UX/UI Design</span> are
                    terrifying, and your site crashes when customer visits.
                  </p>
                  <p>
                    RemotoDojo provides qualified IT staffing solutions for all
                    your <span>IT and project-based needs</span>, as a bespoke
                    servicd, and at highly competitive rates. We are the
                    extension of your business, and we make IT staffing REALLY
                    easy for you.
                  </p>
                  <div>
                    <Link to="/about" className="tell-me-more-cta">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
