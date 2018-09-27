import React, { Component } from 'react'

import MoviesFound from '../../components/SortingSection/MoviesFound/MoviesFound'
import SortBy from '../../components/SortingSection/SortBy/SortBy';
import styles from './SortingSection.scss'

export class SortingSection extends Component {
  render() {
    return (
      <div className={styles.SortingSection}>
        <MoviesFound />
        <SortBy />
      </div>
    )
  }
}

export default SortingSection
