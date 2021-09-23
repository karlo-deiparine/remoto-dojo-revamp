import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Navigation() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="home-banner-color fixed z-10 top-0 inset-x-0 text-white">
      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <p>Free Consultation {`&`} Quotation</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>hello@remotodojo.com</p>
          <StaticImage
            src="../../images/facebook.svg"
            alt="Facebook"
            width={15}
          />
          <StaticImage
            src="../../images/linkedin.svg"
            alt="Linkedin"
            width={15}
          />
        </div>
      </div>
      <hr />
      <nav className="flex items-center justify-between px-6 py-2">
        <div>
          <StaticImage
            src="../../images/remoto-dojo.png"
            alt="Remoto Dojo"
            width={300}
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 hover:text-white hover:border-white"
          >
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              width={15}
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            <p className="ml-2">MENU</p>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:grow">
            <Link
              to="/"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Home
            </Link>
            <Link
              to="/footprint"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Footprint
            </Link>
            <Link
              to="/about"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              About
            </Link>
            <Link
              to="/why-choose-the-philippines-for-it-recruitment"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Why The Philippines
            </Link>
            <Link
              to="/why-us"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Why Us
            </Link>
            <Link
              to="/"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Portfolio
            </Link>
            <Link
              to="/industry-news"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Industry News
            </Link>
            <Link
              to="/blog"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Blog
            </Link>
            <Link
              to="/business-angels"
              className="text-white mx-2 text-sm font-bold uppercase"
            >
              Business Angels
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
