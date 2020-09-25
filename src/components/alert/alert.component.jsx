import React from 'react'

import styles from './alert.styles.css'

const Alert = ({ type, children }) => {
  type =
    type === 'error' ||
    type === 'warning' ||
    type === 'success' ||
    type === 'primary' ||
    type === 'secondary'
      ? type
      : 'primary'

  return (
    <div className={`${styles.alert} ${styles['alert--' + type]}`}>
      {children || 'This is an alert message!! 💥'}
    </div>
  )
}

export default Alert
