import React, { Component } from 'react'

import SearchInput from './SearchInput/SearchInput'
import SearchButton from './SearchButton/SearchButton'
import SearchFilters from './SearchFilters/SearchFilters'
import styles from './Search.scss'

export class Search extends Component {
  render() {
    return (
      <form>
        <SearchInput />
        <div className={styles.HeaderFilters} >
          <SearchFilters />
          <SearchButton />
        </div>
      </form>
    )
  }
}

export default Search
