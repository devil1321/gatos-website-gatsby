import React from 'react'
import * as styles from '../../../styles/components/become-partner/local-bussines/local-bussines.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import Item from './item.component'

const LocalBussines = () => {

  const [map,setMap] = useImage('local-bussines-map')

  return (
    <div className={styles.customers}>
      {map && <GatsbyImage className={styles.map} image={map[0].gatsbyImageData} alt="map" />}
      <Item img='local-bussines-1' left='' top="" />
      <Item img='local-bussines-2' left='' top="" />
      <Item img='local-bussines-3' left='' top="" />
      <Item img='local-bussines-4' left='' top="" />
      <Item img='local-bussines-5' left='' top="" />
      <Item img='local-bussines-6' left='' top="" />
      <Item img='local-bussines-7' left='' top="" />
      <Item img='local-bussines-8' left='' top="" />
      <Item img='local-bussines-9' left='' top="" />
      <Item img='local-bussines-10' left='' top="" />
      <Item img='local-bussines-11' left='' top="" />
      <Item img='local-bussines-12' left='' top="" />
      <Item img='local-bussines-13' left='' top="" />
      <Item img='local-bussines-14' left='' top="" />
      <Item img='local-bussines-15' left='' top="" />
      <Item img='local-bussines-16' left='' top="" />
      <Item img='local-bussines-17' left='' top="" />
      <Item img='local-bussines-18' left='' top="" />
      <Item img='local-bussines-19' left='' top="" />
    </div>
  )
}

export default LocalBussines
