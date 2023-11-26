import React from 'react'
import { GlobalComponents } from '../components/global'
import { LearnMoreComponents } from '../components/learn-more'
import * as styles from '../styles/pages/learn-more.module.scss'

const LearnMore = () => {
  return (
    <GlobalComponents.Layout className={styles.learn_more}>
      <LearnMoreComponents.Hero />
      <LearnMoreComponents.AboutComponents.About />
      <LearnMoreComponents.Founder />
    </GlobalComponents.Layout>
  )
}

export default LearnMore
