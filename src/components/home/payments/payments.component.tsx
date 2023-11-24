import React, { useEffect } from 'react'
import Feature from './feature.component'
import Details from './details.component'
import * as styles from '../../../styles/components/home/payments/payments.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Payments = () => {

  const handleText = (text:string) =>{
    return [...text].map((l:string) => <span className='home__payments-letter'>{l}</span>)
  }

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(`.home__payments .home__payments-letter`,{ x:-1000,opacity:0 },{ 
      x:0,
      opacity:1,
      stagger:{
        amount:2,
        from:'start'
      },
      scrollTrigger:{
        trigger:'.home__payments',
        scrub:3,
        start:'1000px'
      }
    })
  }
  
  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.payments} home__payments`}>
      <h2>{handleText('SECURE')}</h2>
      <Feature />
      <Details />
    </div>
  )
}

export default Payments
