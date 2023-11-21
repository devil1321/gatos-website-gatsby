import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GlobalComponents } from "../components/global"
import { HomeComponents } from "../components/home"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <GlobalComponents.Layout className="">
      <main>
        <HomeComponents.HeroComponents.Hero />
        <HomeComponents.ScanComponents.Item /> 
        <HomeComponents.ScanComponents.Item /> 
        <HomeComponents.ScanComponents.Item /> 
        <HomeComponents.CardComponents.Item />
        <HomeComponents.BenefitsComponents.Benefits />
        <HomeComponents.PaymentsComponents.Payments />
        <HomeComponents.GalleryComponents.Gallery />
        <HomeComponents.RewardsComponents.Rewards />
      </main>
    </GlobalComponents.Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
