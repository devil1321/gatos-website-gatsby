import React, { useEffect } from 'react'
import { GlobalComponents } from '../components/global'
import { BecomePartnerComponents } from '../components/become-partner'
import * as styles from '../styles/pages/become-partner.module.scss'
import { handleBackground } from '../lib/handle-background'
import { handleAnchorColor } from '../lib/handle-anchors-color'
const BecomePartner = () => {
 
  useEffect(()=>{
    handleBackground('white')
    handleAnchorColor('#191919')
  },[])

  return (
    <GlobalComponents.Layout className={styles.become_partner}>
      <BecomePartnerComponents.HeroComponents.Hero />
      <BecomePartnerComponents.Feature />
      <BecomePartnerComponents.BussinesAndBrandingComponents.BussinesAndBranding />
      <BecomePartnerComponents.StepComponents.Steps />
      <BecomePartnerComponents.CustomersComponents.Customers />
      <BecomePartnerComponents.MarketComponents.Market />
      <BecomePartnerComponents.LocalBusinessComponents.LocalBusiness />
    </GlobalComponents.Layout>
  )
}
export default BecomePartner
