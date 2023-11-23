import React, { useEffect } from 'react'
import * as styles from '../../styles/components/global/nav.module.scss'
import { Link } from 'gatsby'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Nav:React.FC = () => {

  const [logo,setLogo] = useImage('nav-logo')


  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <Link to="/">Become a provider</Link>
        <Link to="/learn-more">Learn more</Link>
      </div>
      <div className={styles.logo}>
        {logo && <GatsbyImage image={logo.gatsbyImageData} alt='logo' />}
      </div>
      <div></div>
    </div>
  )
}

export default Nav
