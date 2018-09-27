import React from 'react'

import styles from './CardItem.scss'

const CardItem = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardImage}>
        <img src='https://cdn.miramax.com/media/assets/Pulp-Fiction1.png' />
      </div>
      <div>
        <p className={styles.CardFilmName} >Pulp Fiction<span className={styles.CardYear}>2004</span></p>
        <p className={styles.CardGenre}>Crime</p>
      </div>
    </div>
  )
}

export default CardItem
