import React from 'react'

import styles from './input.styles.css'

const Input = ({
  variant,
  sticky,
  label = 'Enter Here',
  type = 'text',
  ...otherProps
}) => {
  otherProps.placeholder = 'Enter Here'

  variant =
    variant === 'bordered' || variant === 'rounded' ? variant : 'default'

  type = type === 'email' || type === 'password' ? type : 'text'

  const style = {
    position: 'sticky',
    top: '0'
  }

  return (
    <div style={sticky ? style : null} className={styles.inputContainer}>
      <input
        className={`${styles.inputField} ${styles['inputField--' + variant]}`}
        type={type}
        {...otherProps}
      />
      <label className={styles.inputLabel}>{label}</label>
    </div>
  )
}

export default Input
