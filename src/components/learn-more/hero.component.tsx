import React, { useEffect } from 'react'
import * as styles from '../../styles/components/learn-more/hero.module.scss'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import gsap from 'gsap'

const Hero = () => {

  const [hero,setHero] = useImage('hero')
  const [play,setPlay] = useImage('play')

  const handleText = (text:string) =>{
    return text.split(" ").map((w:string) => <span className="learn-more__hero-word">{[...w].map((l:string) => <span className='learn-more__hero-letter'>{l}</span>)}</span>)
  }

  const handleAnimateHeading = () =>{
    gsap.fromTo(`h1 .learn-more__hero-letter`,{ opacity:0,y:-20,rotateX:100 },{ opacity:1,y:0,rotateX:0,duration:1,stagger:{
        from:'start',
        amount:2,
        ease:"sine.inOut"
      }
    })
  }

  const handleAnimateParagraph = () =>{
    gsap.fromTo(`p .learn-more__hero-letter`,{ opacity:0,},{ opacity:1,duration:1,delay:1,stagger:{
        from:'random',
        amount:2,
        ease:"sine.inOut"
      }
    })
  }

  const handleAnimateImage = () =>{
    gsap.fromTo(`.${styles.img}`,{x:1000},{x:0,duration:1})
  }

useEffect(()=>{
  handleAnimateHeading()
  handleAnimateParagraph()
  handleAnimateImage()
},[])

  return (
    <div className={styles.hero}>
      <div className={styles.column}>
        <h1>{handleText('GATOS')}</h1>
        <p>{handleText('Below the bill')}</p>
      </div>
      <div className={styles.column}>
        <div className={styles.img}>
          {hero && <GatsbyImage image={hero[1].gatsbyImageData} alt="hero-image" />}
          {play && <GatsbyImage className={styles.play} image={play[0].gatsbyImageData} alt="play-image" />}
        </div>
      </div>
    </div>
  )
}

export default Hero
