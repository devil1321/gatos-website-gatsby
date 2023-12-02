import React, { useEffect } from 'react'
import Intro from './intro.component'
import Item from './item.component'
import * as styles from '../../../styles/components/become-partner/hero/hero.module.scss'
import useImage from '../../../hooks/useImage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Hero = () => {

  const [hero_1,setHero_1] = useImage('hero-1')
  const [hero_2,setHero_2] = useImage('hero-2')
  const [hero_3,setHero_3] = useImage('hero-3')
  const [hero_4,setHero_4] = useImage('hero-4')
  const [hero_5,setHero_5] = useImage('hero-5')
  const [hero_6,setHero_6] = useImage('hero-6')
  const [hero_7,setHero_7] = useImage('hero-7')
  const [hero_8,setHero_8] = useImage('hero-8')
  const [hero_9,setHero_9] = useImage('hero-9')
  

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.become-partner__hero-item',{opacity:0},{
      opacity:1,
      duration:1,
      stagger:{
        amount:2,
        from:'start'
      },
      scrollTrigger:{
        trigger:'.become-parner__hero-main',
        start:'-400px',
        end:'-400px',
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={styles.hero}>
      <Intro />
      <div className={`${styles.main} become-parner__hero-main`}>
        <div className={styles.column}>
          <h2>LOCAL BUSINESSMAN = GASTOS  PROVIDER</h2>
          <p>A PLACE WHERE GROWTH MEETS PROFIT</p>
        </div>
        <div className={styles.column}>
            {hero_1 && <Item className='become-partner__hero-item' img={hero_1[0].gatsbyImageData} translateX="0%" translateY="-100%" />}
            {hero_2 && <Item className='become-partner__hero-item' img={hero_2[0].gatsbyImageData} translateX="60%" translateY="-20%" />}
            {hero_3 && <Item className='become-partner__hero-item' img={hero_3[0].gatsbyImageData} translateX="20%" translateY="30%" />}
            {hero_4 && <Item className='become-partner__hero-item' img={hero_4[0].gatsbyImageData} translateX="0%" translateY="300%" />}
            {hero_6 && <Item className='become-partner__hero-item' img={hero_6[0].gatsbyImageData} translateX="330%" translateY="-110%" />}
            {hero_5 && <Item className='become-partner__hero-item' img={hero_5[0].gatsbyImageData} translateX="75%" translateY="-60%" />}
            {hero_7 && <Item className='become-partner__hero-item' img={hero_7[1].gatsbyImageData} translateX="1900%" translateY="300%" />}
            {hero_8 && <Item className='become-partner__hero-item' img={hero_8[0].gatsbyImageData} translateX="200%" translateY="60%" />}
            {hero_9 && <Item className='become-partner__hero-item' img={hero_9[0].gatsbyImageData} translateX="200%" translateY="0%" />}
        </div>
      </div>
    </div>
  )
}

export default Hero
