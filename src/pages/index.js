import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "@components/layout"
import Seo from "@components/seo"
import Header from "@components/header"
import HomeBanner from "@components/home-header/home-banner"
import WhatWeProvide from "@components/home-content/what-we-provide"

const IndexPage = ({ data }) => {
  const subTitle = `Your IT Staffing Solutions & Recruitment Experts`

  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <div className="relative">
        <Header siteTitle={`${data.site.siteMetadata.title} | ${subTitle}`} />
        <HomeBanner />

        {/* WHO ARE WE SECTION - START */}
        <section id="who-we-are" className="my-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
              <StaticImage src="../images/who-we-are.png" alt="Who We Are?" />
            </div>
            <div>
              <div>
                <h3 className="text-3xl text-tertiary uppercase font-DinCondensed leading-none">
                  Who Are We?
                </h3>
                <h2 className="text-5xl text-primary uppercase font-DinCondensed">
                  What's Remotodojo?
                </h2>
              </div>
              <div>
                <div className="grid grid-cols-2 py-6">
                  <div className="flex space-x-4">
                    <div>
                      <StaticImage
                        src="../images/remoto.png"
                        alt="Remoto"
                        width={70}
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold text-2xl">
                        Remoto
                      </h4>
                      <p className="text-secondary">
                        Re-mo-to - remote, outlying, not where you are, but
                        available when you need.
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <StaticImage
                        src="../images/dojo.png"
                        alt="Dojo"
                        width={70}
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold text-2xl">
                        Dojo
                      </h4>
                      <p className="text-secondary">
                        Do-jo - a place of development, of improvement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-secondary">
                    At RemotoDojo, we believe that every entrepreneur, every
                    company, no matter the size, should be able to get their{" "}
                    <span className="text-tertiary">IT staffing needs</span>{" "}
                    handled and see their ideas realized. Their business
                    optimized. We also believe in building a place where
                    technological professionals of all skill levels and
                    specialties can practice their trade and develop themselves
                    both professionally and personally.
                  </p>
                  <p className="text-secondary">
                    Maybe you have the greatest business processing idea in the
                    history of mankind, but your doodles are about as intuitive
                    as an Apple II and you need IT staffing. Maybe your company
                    has one of thos little websites that looks like it was made
                    using Geocities in 2001. It was fine then, but now terms
                    like Backend Integration and{" "}
                    <span className="text-tertiary">UX/UI Design</span> are
                    terrifying, and your site crashes when customer visits.
                  </p>
                  <p className="text-secondary">
                    RemotoDojo provides qualified IT staffing solutions for all
                    your{" "}
                    <span className="text-tertiary">
                      IT and project-based needs
                    </span>
                    , as a bespoke servicd, and at highly competitive rates. We
                    are the extension of your business, and we make IT staffing
                    REALLY easy for you.
                  </p>
                  <p>
                    <Link to="/about" className="tell-me-more-cta">
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WHO ARE WE SECTION - END */}

        {/* WHAT WE PROVIDE SECTION - START */}
        <section id="what-we-provide" className="bg-primary text-white py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <h3 className="text-3xl text-tertiary uppercase font-DinCondensed leading-none">
                  Our Services
                </h3>
                <h2 className="text-5xl text-white uppercase font-DinCondensed">
                  What We Provide
                </h2>
              </div>
              <div className="col-span-2">
                <div>
                  <p>
                    When it comes to IT staffing, you need to know what you
                    need! So, what kinds of{" "}
                    <span className="text-tertiary">services</span> can you
                    expect from the ninja team put together for you by
                    RemotoDojo? Have a look at these and ask yourself how many
                    of them you could benefit from. SPOILER: It's basically all
                    of them.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <WhatWeProvide />
            </div>
          </div>
        </section>
        {/* WHAT WE PROVIDE SECTION - END */}
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
