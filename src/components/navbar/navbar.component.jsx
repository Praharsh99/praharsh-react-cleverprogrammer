import React from 'react'

import isImageUrl from 'is-image-url'
import PropTypes from 'prop-types'

import styles from './navbar.styles.css'

const Navbar = ({ imgSrc, sticky, component, children }) => {
  const getWhichCompToRender = (imgLink, component) => {
    if (imgLink && isImageUrl(imgLink)) {
      return <img src={imgSrc} alt='Brand' />
    } else if (component) {
      return false
    } else {
      return <h1>Brand</h1>
    }
  }

  const style = {
    position: 'sticky',
    top: '0'
  }

  return (
    <div style={sticky ? style : null} className={styles.navbar}>
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
