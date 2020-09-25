import React from 'react'

import styles from './loader.style.css'

const Loader = ({ height, loaderColor, loaderBackgroundColor }) => {
  const style = {
    height: height || '80px',
    width: height || '80px',
    borderColor: loaderBackgroundColor || '#000',
    borderTopColor: loaderColor || '#fd9d00'
  }

  return (
    <div style={style} className={styles.loader}>
      {}
    </div>
  )
}

export default Loader
