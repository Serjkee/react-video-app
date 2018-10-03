import React from 'react'

import styles from './Footer.scss'
import NetflixLogo from '../../components/Header/NetflixLogo/NetflixLogo'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <NetflixLogo />
    </div>
  )
}

export default Footer
