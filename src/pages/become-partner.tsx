import React from 'react'
import { GlobalComponents } from '../components/global'
import { BecomePartnerComponents } from '../components/become-partner'
import * as styles from '../styles/pages/become-partner.module.scss'

const BecomePartner = () => {
  return (
    <GlobalComponents.Layout className={styles.become_partner}>
      <BecomePartnerComponents.Hero />
      <BecomePartnerComponents.Feature />
      <BecomePartnerComponents.BussinesAndBranding />
      <BecomePartnerComponents.StepComponents.Steps />
      <BecomePartnerComponents.CustomersComponents.Customers />
      <BecomePartnerComponents.MarketComponents.Market />
      <BecomePartnerComponents.LocalBusinessComponents.LocalBusiness />
    </GlobalComponents.Layout>
  )
}
export default BecomePartner
