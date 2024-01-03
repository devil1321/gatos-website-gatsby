import React, { useEffect } from 'react'
import { GlobalComponents } from '../components/global'
import { LearnMoreComponents } from '../components/learn-more'
import * as styles from '../styles/pages/learn-more.module.scss'
import { handleBackground } from '../lib/handle-background'
import gsap from 'gsap'
const LearnMore = () => {
   
  useEffect(()=>{
    handleBackground('#191919')
    gsap.config({
      force3D:true
    })
  },[])

  return (
    <GlobalComponents.Layout className={styles.learn_more} >
      <LearnMoreComponents.Hero />
      <LearnMoreComponents.AboutComponents.About />
      <LearnMoreComponents.Founder />
      <GlobalComponents.CardsComponents.Cards title="Recognition & Certification" />
    </GlobalComponents.Layout>
  )
}

export default LearnMore
