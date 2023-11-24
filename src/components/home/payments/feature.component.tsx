import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/payments/feature.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all'

const Feature = () => {

  const [payments_1,setPayments_1] = useImage('payments-1')
  const [payments_2,setPayments_2] = useImage('payments-2')
  const [payments_3,setPayments_3] = useImage('payments-3')
  const [payments_4,setPayments_4] = useImage('payments-4')
  const [payments_5,setPayments_5] = useImage('payments-5')
  const [payments_6,setPayments_6] = useImage('payments-6')
  const [payments_7,setPayments_7] = useImage('payments-7')

  const handlePath = (itemClassName:string,start:number,end:number) =>{
    gsap.registerPlugin(MotionPathPlugin)
    gsap.registerPlugin(ScrollTrigger)
    const targets = gsap.utils.toArray(".home__payments-item");
    const dur = 6;
    targets.forEach((obj, i) => {
      gsap
        .timeline({ defaults: { ease: "none" }, repeat: -1 })
        .to(obj, {
          duration: dur,
          motionPath: {
            path: "#path_payments",
            align: "#path_payments",
            alignOrigin: [0.5, 0.5],
            start: 0,
            end:1
          }
        })
        .to(
          obj,
          {
            scale: 0.7,
            duration: dur / 2,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut"
          },
          0
        )
        .progress(i * (1 / targets.length));
    });
    gsap.fromTo('.home__payments-feature',{opacity:0},{
      opacity:1,
      scrollTrigger:{
        trigger:'.home__payments',
        scrub:3,
        start:'-=450px',
        end:'+=350px'
      }
    })
  }

  const handleAnimate = () =>{
    gsap.registerPlugin(MotionPathPlugin)
    handlePath('.home__payments-item:nth-of-type(2)',0,1)
  }

  useEffect(()=>{
    setTimeout(() => {
      
      handleAnimate()
    }, 100);
  },[])

  return (
    <div className={`${styles.feature} home__payments-feature`}>
     <svg className={styles.svg} width={1000} height={1000} fill='none'>
        <path id='path_payments' d="M100,250a200,250 0 1,0 400,0a200,250 0 1,0 -400,0" />
      </svg>
      <div className={styles.main_item}>
        {payments_1 && <GatsbyImage image={payments_1[0].gatsbyImageData} alt="main-item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_7 && <GatsbyImage image={payments_7[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_2 && <GatsbyImage image={payments_2[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_3 && <GatsbyImage image={payments_3[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_4 && <GatsbyImage image={payments_4[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_5 && <GatsbyImage image={payments_5[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_6 && <GatsbyImage image={payments_6[0].gatsbyImageData} alt="item-img" />}
      </div>
      <div className={`${styles.item} home__payments-item`}>
        {payments_7 && <GatsbyImage image={payments_7[0].gatsbyImageData} alt="item-img" />}
      </div>
    </div>
  )
}

export default Feature
