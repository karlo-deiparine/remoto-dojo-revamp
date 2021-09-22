import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-black">
      <div className="flex flex-wrap items-center justify-between p-6 mb-6 space-y-2 container mx-auto">
        <div className="flex w-full justify-between items-center border-b border-white pb-2">
          <div>
            <p className="text-white">Free Consultation {"&"} Quotation</p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-white">hello@remotodojo.com</p>
            <StaticImage
              src="../images/facebook.svg"
              width={15}
              alt="Facebook"
            />
            <StaticImage
              src="../images/linkedin.svg"
              width={15}
              alt="Linkedin"
            />
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <StaticImage
            src="../images/remoto-dojo.png"
            alt="remotoDojo"
            width={300}
            height={74}
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-white space-x-2 hover:opacity-70"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <p className="font-bold">MENU</p>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm float-right text-right uppercase font-bold">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Home
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Footprint
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              About
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Why The Philippines
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Why Us
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Portfolio
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Industry News
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Blog
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:opacity-70"
            >
              Business Angels
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
