import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/become-partner/customers/customers.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import Item from './item.component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Customers = () => {

  const [arrow_head,setArrow_head] = useImage('arrow-head')
  const [arrow_tail,setArrow_tail] = useImage('arrow-tail')

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.customers__item',{ opacity:0 },{
      opacity:1,
      duration:0.1,
      ease:'linear',
      stagger:{
        amount:2,
        from:'center',
        ease:'linear'
      },
      scrollTrigger:{
        trigger:'.customers',
        start:'150px',
        end:'150px',
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.customers} customers`}>
      <h2>Look after your customers, the business will take care of itself.</h2>
      {arrow_head && <GatsbyImage className={styles.arrow_head} image={arrow_head[0].gatsbyImageData} alt="arrow-head" />}
      {arrow_tail && <GatsbyImage className={styles.arrow_tail} image={arrow_tail[0].gatsbyImageData} alt="arrow-tail" />}
      <Item className="customers__item" img='customers-1' left='0%' top="30%" />
      <Item className="customers__item" img='customers-2' left='5%' top="50%" />
      <Item className="customers__item" img='customers-3' left='0%' top="70%" />
      <Item className="customers__item" img='customers-4' left='15%' top="90%" />
      <Item className="customers__item" img='customers-5' left='25%' top="55%" />
      <Item className="customers__item" img='customers-6' left='20%' top="40%" />
      <Item className="customers__item" img='customers-7' left='40%' top="30%" />
      <Item className="customers__item" img='customers-8' left='50%' top="45%" />
      <Item className="customers__item" img='customers-9' left='60%' top="75%" />
      <Item className="customers__item" img='customers-10' left='70%' top="40%" />
      <Item className="customers__item" img='customers-11' left='80%' top="55%" />
      <Item className="customers__item" img='customers-12' left='70%' top="75%" />
      <Item className="customers__item" img='customers-13' left='90%' top="30%" />
    </div>
  )
}

export default Customers
