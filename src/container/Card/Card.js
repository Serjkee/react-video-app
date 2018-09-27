import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import styles from './Card.scss'

export class Card extends Component {
  render() {
    return (
      <div className={styles.CardWrapper}>
        <CardItem />
      </div>
    )
  }
}

export default Card
