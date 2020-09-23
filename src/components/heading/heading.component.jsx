import React from 'react'

import styles from './heading.styles.css'

const Heading = ({ invert, children }) => {
  return (
    <h1
      className={`${styles.heading} ${
        invert ? styles['heading--' + 'invert'] : null
      }`}
    >
      {children || 'This is a heading 🚀'}
    </h1>
  )
}

export default Heading
