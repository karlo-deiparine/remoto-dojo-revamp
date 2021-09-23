import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

function HomeBanner() {
  const { bannerHome } = useStaticQuery(
    graphql`
      query {
        bannerHome: file(relativePath: { eq: "homepage-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const bannerImage = getImage(bannerHome)

  return (
    <BgImage className="h-screen relative" image={bannerImage}>
      <div className="banner-text h-1/2 bg-no-repeat w-full bottom-0 absolute">
        <div className="py-20 px-40 space-y-5">
          <h1 className="text-6xl text-primary font-bold">
            Assassinate your <br /> IT staffing woes!
          </h1>
          <h2 className="text-2xl text-secondary font-medium">
            Your IT staffing and software boutique <br /> for a new business
            landscape
          </h2>
          <div className="pt-4">
            <a
              href="/"
              className="border uppercase py-4 px-10 font-semibold text-white bg-primary rounded border-primary hover:bg-white shadow-cta"
            >
              Tell Me More
            </a>
          </div>
        </div>
      </div>
    </BgImage>
  )
}

export default HomeBanner
