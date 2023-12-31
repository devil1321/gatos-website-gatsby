import React, { useEffect } from 'react'
import Item from './item.component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import useImage from '../../../hooks/useImage'
import * as styles from '../../../styles/components/home/benefits/benefits.module.scss'


const Benefits = () => {

  const [benefits_1,setBenefits_1] = useImage('benefits-1')
  const [benefits_2,setBenefits_2] = useImage('benefits-2')
  const [benefits_3,setBenefits_3] = useImage('benefits-3')
  const [benefits_4,setBenefits_4] = useImage('benefits-4')

  const handleText = (text:string) =>{
    return [...text].map((l:string) => <span className='home__benefits-letter'>{l}</span>)
  }

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(`.home__benefits .home__benefits-letter`,{ x:-1000,opacity:0 },{ 
      x:0,
      opacity:1,
      stagger:{
        amount:2,
        from:'start'
      },
      scrollTrigger:{
        trigger:'.home__benefits',
        scrub:3,
        start:'-=450px',
        end:'+=350px'
      }
    })
    gsap.fromTo('.home__benefits-item',{ y:150,opacity:0 },{
      y:0,
      opacity:1,
      scrollTrigger:{
        trigger:'.home__benefits',
        scrub:3,
        start:'-=450px',
        end:'+=350px'
      }
    })
  }


  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.benefits} home__benefits`}>
      <h2 className={`${styles.background_text} home__benefits-background-text`}>{handleText('BENEFITS')}</h2>
      <div className={styles.column}>
        <Item image={benefits_1} heading="EARN ON EVERY PAYMENT" text="How do you like the sound the sound of earning money whenever you pay for something ? If you don’t believe this then we have some suprises for you." />
        <Item image={benefits_2} heading="MANAGED EXPENSES" text="Do you also wonder about where your money is flying away? Well we have an answer for you. Record all your expenses at one place using Gastos" />
      </div>
      <div className={styles.column}>
        <Item image={benefits_3} heading="PAY LESS SAVE MORE" text="Pay below the bill with and get instant discounts . Who knew saving money had no limits?" />
        <Item image={benefits_4} heading="WIDE RANGE OF PAYMENTS" text="We cover everyone from your local chai vala to fancy restaurants ,from your nearby gym to the distant salon Choose a place and we are there for you" />
      </div>
    </div>
  )
}

export default Benefits
