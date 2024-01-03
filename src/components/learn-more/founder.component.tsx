import React from 'react'
import * as styles from '../../styles/components/learn-more/founder.module.scss'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Founder = () => {

  const [founder,setFounder] = useImage('founder')
  const [waves_1,setWaves_1] = useImage('waves-1')
  const [waves_2,setWaves_2] = useImage('waves-2')

  return (
    <div className={styles.founder}>
      <div className={styles.founder_img}>
        {founder && <GatsbyImage image={founder[0].gatsbyImageData} alt="founder" />}
      </div>
      <div className={styles.wave_2}>
        {waves_2 && <GatsbyImage image={waves_2[0].gatsbyImageData} alt="waves-2" />}
      </div>
    </div>
  )
}

export default Founder
