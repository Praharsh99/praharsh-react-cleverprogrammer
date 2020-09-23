import React from 'react'

import styles from './input.styles.css'

const Input = ({
  variant,
  label = 'Enter Here',
  type = 'text',
  ...otherProps
}) => {
  otherProps.placeholder = 'Enter Here'

  variant =
    variant === 'bordered' || variant === 'rounded' ? variant : 'default'

  type = type === 'email' || type === 'password' ? type : 'text'

  return (
    <div className={styles.inputContainer}>
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
