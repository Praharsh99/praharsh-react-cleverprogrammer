import React from 'react'

import styles from './search-bar.styles.css'

const SearchBar = ({ invert, ...otherProps }) => {
  return (
    <div
      className={`${styles.searchBarContainer} ${
        invert ? styles['searchBarContainer--' + 'invert'] : null
      }`}
    >
      <button type='submit' className={styles.searchIcon}>
        <img
          src='https://img.icons8.com/fluent/56/000000/search.png'
          alt='Search'
        />
      </button>

      <input
        className={`${styles.searchBar} ${
          invert ? styles['searchBar--' + 'invert'] : null
        }`}
        placeholder='Search for something...'
        {...otherProps}
      />

      <div className={styles.hiddenBackground}>{}</div>
    </div>
  )
}

export default SearchBar
