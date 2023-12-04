import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/become-partner/local-bussines/local-bussines.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import Item from './item.component'

const LocalBussines = () => {

  const [map,setMap] = useImage('local-bussines-map')

  return (
    <div className={`${styles.local_bussines} local-bussines`}>
      <h2>We belive and support every local business</h2>
      {map && <GatsbyImage className={styles.map} image={map[0].gatsbyImageData} alt="map" />}
      <Item className="local-bussines__item" img='local-bussines-1' left='0%' top="20%" />
      <Item className="local-bussines__item" img='local-bussines-2' left='10%' top="35%" />
      <Item className="local-bussines__item" img='local-bussines-3' left='5%' top="55%" />
      <Item className="local-bussines__item" img='local-bussines-4' left='10%' top="75%" />
      <Item className="local-bussines__item" img='local-bussines-5' left='25%' top="95%" />
      <Item className="local-bussines__item" img='local-bussines-6' left='35%' top="80%" />
      <Item className="local-bussines__item" img='local-bussines-7' left='25%' top="65%" />
      <Item className="local-bussines__item" img='local-bussines-8' left='40%' top="45%" />
      <Item className="local-bussines__item" img='local-bussines-9' left='25%' top="20%" />
      <Item className="local-bussines__item" img='local-bussines-10' left='15%' top="10%" />
      <Item className="local-bussines__item" img='local-bussines-11' left='50%' top="60%" />
      <Item className="local-bussines__item" img='local-bussines-12' left='60%' top="40%" />
      <Item className="local-bussines__item" img='local-bussines-13' left='55%' top="10%" />
      <Item className="local-bussines__item" img='local-bussines-14' left='80%' top="30%" />
      <Item className="local-bussines__item" img='local-bussines-15' left='75%' top="50%" />
      <Item className="local-bussines__item" img='local-bussines-16' left='65%' top="65%" />
      <Item className="local-bussines__item" img='local-bussines-17' left='55%' top="75%" />
      <Item className="local-bussines__item" img='local-bussines-18' left='65%' top="95%" />
      <Item className="local-bussines__item" img='local-bussines-19' left='90%' top="85%" />
    </div>
  )
}

export default LocalBussines
