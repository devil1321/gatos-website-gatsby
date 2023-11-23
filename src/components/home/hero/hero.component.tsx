import React from 'react'
import Details from './details.component'
import Image from './image.component'
import * as styles from '../../../styles/components/home/hero/hero.module.scss'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Details />
      <Image />
    </div>
  )
}

export default Hero
