import React from 'react'

import styles from './card.styles.css'

const Card = ({ invert, children }) => {
  return (
    <div className={`${styles.card} ${invert ? styles['card--invert'] : ''}`}>
      {children}
    </div>
  )
}

export default Card
