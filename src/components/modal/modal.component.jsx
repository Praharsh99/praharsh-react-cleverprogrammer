import React from 'react'

import styles from './modal.styles.css'

const Modal = ({ isOpen = false, children, invert }) => {
  return isOpen ? (
    <div className={`${styles.modal} ${invert ? styles['modal--invert'] : ''}`}>
      {children}
    </div>
  ) : null
}

export default Modal
