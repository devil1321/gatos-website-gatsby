import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/hero/details.module.scss'
import gsap from 'gsap'

const Details = () => {


  const handleText = (text:string) =>{
    return text.split(" ").map((w:string) =><span className='home__hero-word'>{[...w].map((l:string)=><span className='home__hero-letter'>{l}</span>)}</span>)
  }

  const handleAnimateHeading = () =>{
    gsap.fromTo(`h1 .home__hero-letter`,{ opacity:0,y:-20,rotateX:100 },{ opacity:1,y:0,rotateX:0,duration:1,delay:1,stagger:{
        from:'start',
        amount:2,
        ease:"sine.inOut"
      }
    })
  }

  const handleAnimateParagraph = () =>{
    gsap.fromTo(`p .home__hero-letter`,{ opacity:0,},{ opacity:1,duration:1,delay:2,stagger:{
        from:'random',
        amount:2,
        ease:"sine.inOut"
      }
    })
  }

  const handleAnimateButton = () =>{
    gsap.fromTo('.home__hero-button',{ opacity:0,y:200 },{ y:0,opacity:1,durtation:1,delay:3 })
  }


 
  useEffect(()=>{
      handleAnimateHeading()
      handleAnimateParagraph()
      handleAnimateButton()
  },[])

  return (
    <div className={styles.details}>
      <h1>{handleText('Pay Below The Bill With Gastos')}</h1>
      <p>{handleText('Instant Discounts and exclusive offers whenever and wherever you go Pay Below The Bill With Gastos')}</p>
      <button className="home__hero-button">Get Started</button>
    </div>
  )
}

export default Details
