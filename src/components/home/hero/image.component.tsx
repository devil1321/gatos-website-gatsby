import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/hero/image.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/all'

const Image = () => {
  
  const [hero,setHero] = useImage('hero')
  const [user_1,setUser_1] = useImage('user-1')
  const [user_2,setUser_2] = useImage('user-2')

  const handlePath = (itemClassName:string,start:number,end:number) =>{
    gsap.registerPlugin(MotionPathPlugin)
    gsap.to(itemClassName,{
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: start,
        end: end
      },
      transformOrigin: "50% 50%",
      duration: 2,
      ease: "power2.inOut",
    })
  }

  useEffect(()=>{
    setTimeout(() => {
      handlePath('.image__item-1',0.15,0.85)
      handlePath('.image__item-2',0.60,1.35)
    }, 10);
  },[])

  return (
    <div className={styles.image}>
      <svg className={styles.svg} width={400} height={400} fill='none'>
        <path id='path' d="M30,200a170,170 0 1,0 340,0a170,170 0 1,0 -340,0" />
      </svg>
      <div className={`${styles.item} image__item-1`}>
        {user_1 && <GatsbyImage image={user_1[0].gatsbyImageData} alt="user" />}
        <div className={styles.details}>
          <p>Muskan</p>
          <p>Amazing! never thought of saving on every payment</p>
        </div>
      </div>
      {hero && <GatsbyImage image={hero[1].gatsbyImageData} alt="hero" />}
      <div className={`${styles.item} image__item-2`}>
        {user_2 && <GatsbyImage image={user_2[0].gatsbyImageData} alt="user" />}
        <div className={styles.details}>
          <p>Aditi</p>
          <p>Love it! saved Rs 1,200 in a month</p>
        </div>
      </div>
    </div>
  )
}

export default Image
