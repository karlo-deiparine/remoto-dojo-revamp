import React from "react"
import PropTypes from "prop-types"

import Navigation from "./home-header/navigation"
function Header() {
  return <Navigation />
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
