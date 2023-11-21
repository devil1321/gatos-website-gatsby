import React from 'react'
import { GlobalComponents } from '../components/global'
import { LearnMoreComponents } from '../components/learn-more'

const LearnMore = () => {
  return (
    <GlobalComponents.Layout className=''>
      <main>
        <LearnMoreComponents.Hero />
        <LearnMoreComponents.AboutComponents.About />
        <LearnMoreComponents.Founder />
      </main>
    </GlobalComponents.Layout>
  )
}

export default LearnMore
