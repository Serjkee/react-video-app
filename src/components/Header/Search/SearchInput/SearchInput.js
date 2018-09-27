import React from 'react'
import styles from './SearchInput.scss'

const SearchInput = () => {
  return (
    <div>
      <input className={styles.SearchInput}placeholder='Example: Quentin Tarantino' />
    </div>
  )
}

export default SearchInput
