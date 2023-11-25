import React from 'react'
import Item from './item.component'
import * as styles from '../../../styles/components/global/faq/faq.module.scss'

const Faq = () => {
  return (
    <div className={styles.faq}>
      <h2>FAQ`S</h2>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Faq
