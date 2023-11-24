import React, { useEffect } from 'react'
import * as styles from '../../../styles/components/home/card/item.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Item = () => {

  const [card,setCard] = useImage('payment-card')

  const handleText = (text:string) => {
    return [...text].map((l:string) => <span className='home__card-item-letter'>{l}</span>)
  }

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.home__card-item',{ x:-1000,opacity:0 },{
      x:0,
      opacity:1,
      scrollTrigger:{
        scrub:3,
        trigger:'.home__card-details',
        start:'300px'
      }
    })
    gsap.fromTo('.home__card-details h2',{ x:500,opacity:0 },{
      x:0,
      opacity:1,
      scrollTrigger:{
        scrub:3,
        trigger:'.home__card-details',
        start:'500px'
      }
    })
    gsap.fromTo('.home__card-details p:first-of-type',{ x:500,opacity:0 },{
      x:0,
      opacity:1,
      scrollTrigger:{
        scrub:3,
        trigger:'.home__card-details',
        start:'700px'
      }
    })
    gsap.fromTo('.home__card-details p:last-of-type',{ x:500,opacity:0 },{
      x:0,
      opacity:1,
      scrollTrigger:{
        scrub:3,
        trigger:'.home__card-details',
        start:'900px'
      }
    })
    gsap.fromTo('.home__card-text-background .home__card-item-letter',{ y:1000,opacity:0 },{
      y:0,
      opacity:1,
      stagger:{
        amount:2,
        from:'start'
      },
      scrollTrigger:{
        scrub:3,
        trigger:'.home__card-details',
        start:'800px'
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={styles.item}>
      <div className={`${styles.card} home__card-item`}>
        {card && <GatsbyImage image={card[0].gatsbyImageData} alt="card"/>}
      </div>
      <div className={`${styles.text_background} home__card-text-background`}>{handleText('CARD')}</div>
      <div className={`${styles.details} home__card-details`}>
        <h2>Green Card Club</h2>  
        <p>Made with you, for you</p>
        <p>We give special benefits, the best of rewards , huge discounts to our green card club members. <Link to="/learn-more">Join us</Link></p>
      </div>
    </div>
  )
}

export default Item
