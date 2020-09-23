import React from 'react'

import isImageUrl from 'is-image-url'
import PropTypes from 'prop-types'

import styles from './navbar.styles.css'

const Navbar = ({ imgSrc, component, children }) => {
  const getWhichCompToRender = (imgLink, component) => {
    if (imgLink && isImageUrl(imgLink)) {
      return <img src={imgSrc} alt='Brand' />
    } else if (component) {
      return false
    } else {
      return <h1>Brand</h1>
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.brandSection}>
        {getWhichCompToRender(imgSrc, component) || component}
      </div>

      <div className={styles.linksSection}>{children}</div>
    </div>
  )
}

Navbar.propTypes = {
  component: PropTypes.element
}

export default Navbar
