import React from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../../../styles/components/become-partner/hero/intro.module.scss'

const Intro = () => {

  const [arrow_down,setArrow_Down] = useImage('arrow-down')

  return (
    <div className={styles.intro}>
      <h1>Join Gastos and become a provider today</h1>
      <button>Get Started</button>
      <div className={styles.icon}>
        {arrow_down && <GatsbyImage image={arrow_down[0].gatsbyImageData} alt="arrow-down" />}
      </div>
    </div>
  )
}

export default Intro
