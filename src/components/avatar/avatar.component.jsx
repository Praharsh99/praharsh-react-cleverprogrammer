import React from 'react'

import styles from './avatar.styles.css'

const Avatar = ({
  src = 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
}) => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt='Avatar' />
    </div>
  )
}

export default Avatar
