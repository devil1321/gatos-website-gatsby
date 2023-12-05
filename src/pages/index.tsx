import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GlobalComponents } from "../components/global"
import { HomeComponents } from "../components/home"
import * as styles from '../styles/pages/home.module.scss'
import { useEffect } from "react"
import { handleBackground } from "../lib/handle-background"
import gsap from "gsap"

const IndexPage: React.FC<PageProps> = () => {

   
  useEffect(()=>{
    handleBackground('#191919')
    gsap.config({
      force3D:true
    })
  },[])

  return (
    <GlobalComponents.Layout className={styles.home}>
      <HomeComponents.HeroComponents.Hero />
      <div className={styles.scan}>
        <h3>How It Works...</h3>
        <HomeComponents.ScanComponents.Item 
          heading="Scan The QR" 
          text="Step 1: Open the Gastos app, scan the QR" 
          textBackground="SCAN" 
          imgName="scan-1" /> 
        <HomeComponents.ScanComponents.Item 
          heading="Enter The Bill " 
          text="Step 2 : Enter the amount you want to pay" 
          textBackground="BILL" 
          imgName="scan-2" /> 
        <HomeComponents.ScanComponents.Item 
          heading="And It’s Done" 
          text="Step 3 : Voila! You justpaid your bill and got an instant discount" 
          textBackground="DONE" 
          imgName="scan-3" /> 
      </div>
      <HomeComponents.CardComponents.Item />
      <HomeComponents.BenefitsComponents.Benefits />
      <HomeComponents.PaymentsComponents.Payments />
      <HomeComponents.GalleryComponents.Gallery />
      <HomeComponents.RewardsComponents.Rewards />
      <GlobalComponents.CardsComponents.Cards title="Recognized" />
    </GlobalComponents.Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
