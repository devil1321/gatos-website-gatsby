import React from 'react'
import Sky from './sky.component'
import Buildings from './buildings.component'
import People from './people.component'
import Details from './details.component'
import * as styles from '../../../styles/components/learn-more/about/about.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <Sky />
      <Buildings />
      <People />
      <Details />
    </div>
  )
}

export default About
