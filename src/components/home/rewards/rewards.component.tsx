import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/rewards/rewards.module.scss'
import useImage from '../../../hooks/useImage'
import Dot from './dot.component'
import Icon from './icon.component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Rewards = () => {

  const [icon_1,setIcon_1] = useImage("offers-1")
  const [icon_2,setIcon_2] = useImage("offers-2")
  const [icon_3,setIcon_3] = useImage("offers-3")
  const [icon_4,setIcon_4] = useImage("offers-4")
  const [icon_5,setIcon_5] = useImage("offers-5")
  const [icon_6,setIcon_6] = useImage("offers-6")
  const [icon_7,setIcon_7] = useImage("offers-7")

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.home__rewards-dot',{ opacity:0 },{
      opacity:1,
      duration:0.1,
      ease:'linear',
      stagger:{
        amount:2,
        from:'center',
        ease:'linear'
      },
      scrollTrigger:{
        trigger:'.home__rewards',
        start:'-=150px',
        end:'-=100px'
      }
    })
    gsap.fromTo('.home__rewards-icon',{ opacity:0 },{
      opacity:1,
      delay:0.1,
      duration:0.1,
      ease:'linear',
      stagger:{
        amount:2,
        from:'center',
        ease:'linear'
      },
      scrollTrigger:{
        trigger:'.home__rewards',
        start:'-=150px',
        end:'-=100px'
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.rewards} home__rewards`}>
      <h2> Offers and rewards from hundereds of brands you love</h2>
      <Dot size="16px" color='#2D796D' left='10%' top='10%' />
      <Dot size="22px" color='#FFB8B8' left='12%' top='60%' />
      <Dot size="22px" color='#4876FD' left='30%' top='30%' />
      <Dot size="23px" color='#E125FF' left='32%' top='60%' />
      <Dot size="18px" color='#14B8A6' left='50%' top='25%' />
      <Dot size="11px" color='#99F6E4' left='70%' top='0%' />
      <Dot size="18px" color='#CCFBF1' left='80%' top='50%' />
      <Dot size="18px" color='#6EE7B7' left='90%' top='0%' />
      <Icon image={icon_1} left="3%" top="-10%" />
      <Icon image={icon_2} left="15%" top="-50%" />
      <Icon image={icon_3} left="25%" top="-40%" />
      <Icon image={icon_4} left="40%" top="-100%" />
      <Icon image={icon_5} left="60%" top="-90%" />
      <Icon image={icon_6} left="75%" top="-150%" />
      <Icon image={icon_7} left="85%" top="-120%" />
    </div>
  )
}

export default Rewards
