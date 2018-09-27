import React, { Component } from 'react'

import NetflixLogo from '../../components/Header/NetflixLogo/NetflixLogo'  
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import Search from '../../components/Header/Search/Search'
import styles from './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div className={styles.HeaderImage}>
        <div className={styles.Header}>
          <NetflixLogo />
          <FindYourMovie />
          <Search />
        </div>
      </div>
    )
  }
}

export default Header
