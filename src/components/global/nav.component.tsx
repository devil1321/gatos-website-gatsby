import React, { useEffect } from 'react'
import * as styles from '../../styles/components/global/nav.module.scss'
import { Link } from 'gatsby'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Nav:React.FC = () => {

  const [logo,setLogo] = useImage('nav-logo')


  return (
    <div className={`${styles.nav} nav`}>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/become-partner">Become a provider</Link>
        <Link to="/learn-more">Learn more</Link>
      </div>
      <div className={styles.logo}>
        {logo && <GatsbyImage image={logo[0].gatsbyImageData} alt='logo' />}
      </div>
      <div></div>
    </div>
  )
}

export default Nav
