import React from 'react'

import styles from './button.styles.css'

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={styles.button} {...otherProps}>
      {children || 'Clever Programmer'}
    </button>
  )
}

export default Button
