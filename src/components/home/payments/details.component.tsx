import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/payments/details.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Details = () => {

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.home__payments-details h2',{x:1000,opacity:0},{
      x:0,
      opacity:1,
      scrollTrigger:{
        trigger:'.home__payments-details',
        scrub:3,
        start:'-=650px',
        end:'50px'
      }
    })
    gsap.fromTo('.home__payments-details p',{x:1000,opacity:0},{
      x:0,
      opacity:1,
      scrollTrigger:{
        trigger:'.home__payments-details',
        scrub:3,
        start:'-=550px',
        end:'50px'
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.details} home__payments-details`}>
      <h2>Secure Payments</h2>
      <p>Tie-up with the most trustable brands, so that you don’t compromise with the safety and security of your money</p>
    </div>
  )
}

export default Details
