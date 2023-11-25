import React from 'react'
import * as styles from '../../styles/components/global/footer.module.scss'
import { Link } from 'gatsby'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
const Footer = () => {

  const [logo,setLogo] = useImage('logo')

  return (
    <div className={styles.footer}>
      <div className={styles.top_items}>
        <Link to="/">Become a Provider</Link>
        <Link to="/learn-more">Learn More</Link>
        <div className={styles.logo}>
          {logo && <GatsbyImage image={logo[0].gatsbyImageData} alt='logo' />}
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
