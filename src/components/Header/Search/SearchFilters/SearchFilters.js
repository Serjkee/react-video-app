import React from 'react'

import styles from './SearchFilters.scss'

const SearchFiltes = () => {
  return (
    <div className={styles.SearchFilters}>
      <p>
        Search by
      </p>
      <input id='title' name='search' type='radio' value='TITLE' defaultChecked /><label htmlFor='title'>Title</label>
      <input id='director' name='search' type='radio' value='DIRECTOR' /><label htmlFor='director'>Director</label>
    </div>
  )
}

export default SearchFiltes
