import React, { useEffect, useState } from 'react'
import * as styles from '../../styles/components/global/footer.module.scss'
import { Link } from 'gatsby'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useLocation } from '@reach/router';

const Footer = () => {

  const [logo,setLogo] = useImage('logo')
  const [logo_green,setLogo_Green] = useImage('logo-green')
  const [current,setCurrent] = useState<any>(null)

  const location = useLocation()

  const handleLogo = () =>{
    if(location.pathname === '/become-partner/'){
      setCurrent(logo_green[0])
    }else{
      setCurrent(logo[0])
    }
  }

  useEffect(()=>{
    if(logo && logo_green){
      handleLogo()
    }
  },[logo,logo_green])

  return (
    <div className={styles.footer}>
      <div className={styles.top_items}>
        <Link to="/">Become a Provider</Link>
        <Link to="/learn-more">Learn More</Link>
        <div className={styles.logo}>
          {current && <GatsbyImage image={current.gatsbyImageData} alt='logo' />}
        </div>
        <Link to="#">Contact Us</Link>
        <Link to="#">Privacy Policy</Link>
      </div>
      <div className={styles.bottom_items}>
        <Link to="#">Twitter</Link>
        <Link to="#">Instagram</Link>
        <Link to="#">Facebook</Link>
      </div>
      <div className={styles.foot}>
        <p>&copy; Copyright GATOS PRIVATE LIMITED</p>
      </div>
    </div>
  )
}

export default Footer
