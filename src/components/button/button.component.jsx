import React from 'react'

import styles from './button.styles.css'

const Button = ({ children, ...otherProps }) => {
  return (
    <button
      type='button'
      {...otherProps}
      className={`${styles.button} ${otherProps.className}`}
    >
      {children || 'Clever Programmer'}
    </button>
  )
}

export default Button
