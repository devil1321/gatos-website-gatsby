import React from 'react'
import Item from './item.component'
import * as styles from '../../../styles/components/become-partner/steps/steps.module.scss'
const Steps = () => {
  return (
    <div className={styles.steps}>
      <h2>Get started with 3 easy steps</h2>
      <div className={styles.main}>
        <Item img="step-1" heading='Step-1' subHeading='Register Yourself' text='Register yourself with GASTOS thorugh the provider app available on play store or app store' />
        <Item img="step-2" heading='Step-2' subHeading='Set Your Discount' text='Fix discount margins you want to offer for your customers all by yourself' />
        <Item img="step-3" heading='Step-3' subHeading='Start Accepting Customers' text='Enjoy new and bigger profits with customers coming to your doorstep everyday!' />
      </div>
    </div>
  )
}

export default Steps
