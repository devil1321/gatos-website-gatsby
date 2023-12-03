import React from 'react'
import * as styles from '../../../styles/components/become-partner/market/market.module.scss'
import Item from './item.component'

const Market = () => {
  return (
    <div className={styles.market}>
      <h2>Stand out in the market</h2>
      <div className={styles.main}>
        <Item imgFront='market-1' heading='Low Cost Registration' text='We charge absoultely nothing for your registration' />
        <Item imgFront='market-2-front' imgBack='market-2-back' heading='No Subscription Cost' text='No tie up or maintenance cost, just enjoy the perks  ' />
        <Item imgFront='market-1' heading='Set Your Discount' text='Fix margins on discounts and rewards, all by yourself' />
      </div>
    </div>
  )
}

export default Market
