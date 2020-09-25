import React from 'react'

import styles from './loader.style.css'

const Loader = ({
  loaderWidth,
  loaderBackgroundWidth,
  loaderColor,
  loaderBackgroundColor
}) => {
  const style = {
    borderWidth: loaderBackgroundWidth || '6px',
    borderTopWidth: loaderWidth || '6px',
    borderColor: loaderBackgroundColor || '#e9e9e9',
    borderTopColor: loaderColor || '#fd9d00'
  }

  return (
    <div style={style} className={styles.loader}>
      {}
    </div>
  )
}

export default Loader
