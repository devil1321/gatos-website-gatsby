import React from 'react'
import * as styles from '../../../styles/components/become-partner/customers/customers.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import Item from './item.component'

const Customers = () => {

  const [arrow_head,setArrow_head] = useImage('arrow-head')
  const [arrow_tail,setArrow_tail] = useImage('arrow-tail')

  return (
    <div className={styles.customers}>
      {arrow_head && <GatsbyImage className={styles.arrow_head} image={arrow_head[0].gatsbyImageData} alt="arrow-head" />}
      {arrow_tail && <GatsbyImage className={styles.arrow_back} image={arrow_tail[0].gatsbyImageData} alt="arrow-tail" />}
      <Item img='customers-1' left='' top="" />
      <Item img='customers-2' left='' top="" />
      <Item img='customers-3' left='' top="" />
      <Item img='customers-4' left='' top="" />
      <Item img='customers-5' left='' top="" />
      <Item img='customers-6' left='' top="" />
      <Item img='customers-7' left='' top="" />
      <Item img='customers-8' left='' top="" />
      <Item img='customers-9' left='' top="" />
      <Item img='customers-10' left='' top="" />
      <Item img='customers-11' left='' top="" />
      <Item img='customers-12' left='' top="" />
      <Item img='customers-13' left='' top="" />
    </div>
  )
}

export default Customers
