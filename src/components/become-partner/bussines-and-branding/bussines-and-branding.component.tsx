import React from 'react'
import Item from './item.component'
import * as styles from '../../../styles/components/become-partner/bussines-and-branding/bussines-and-branding.module.scss'

const BussinesAndBranding = () => {
  return (
    <div className={styles.bussines_and_branding}>
      <Item img="bussines-and-branding-1" heading="Branding" text="With our Provider community growing stronger each day, we aim to convert every local business into a brand. " />
      <Item img="bussines-and-branding-2" heading="Business" text=" Business growth and profit making go hand in hand with Gastos" />
    </div>
  )
}

export default BussinesAndBranding
