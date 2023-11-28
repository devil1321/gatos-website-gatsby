import React, { useEffect } from 'react'
import useImage from '../../../hooks/useImage'
import * as styles from '../../../styles/components/learn-more/about/sky.module.scss'
import gsap from 'gsap'
import { ScrollTrigger,MotionPathPlugin } from 'gsap/all'
import { GatsbyImage } from 'gatsby-plugin-image'

const Sky = () => {

  const [cloud_1,setCloud_1] = useImage('cloud-1')
  const [cloud_2,setCloud_2] = useImage('cloud-2')
  const [cloud_3,setCloud_3] = useImage('cloud-3')
  const [plane,setPlane] = useImage('plane')

  const handleAnimate = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(MotionPathPlugin)

    gsap.fromTo('.learn-more__sky-item:first-of-type',{ x:-1000 }, {
      x:800,
      scrollTrigger:{
        trigger:'.learn-more__sky',
        scrub:3,
        start:'0px',
        end:'300px'
      }
    })
    gsap.fromTo('.learn-more__sky-item:nth-of-type(2)',{ x:-1000 }, {
      x:800,
      scrollTrigger:{
        trigger:'.learn-more__sky',
        scrub:3,
        start:'0px',
        end:'300px'
      }
    })
    gsap.fromTo('.learn-more__sky-item:nth-of-type(3)',{ x:1000 }, {
      x:-800,
      scrollTrigger:{
        trigger:'.learn-more__sky',
        scrub:3,
        start:'0px',
        end:'300px'
      }
    })
    gsap.to('.learn-more__sky-item:last-of-type',{
      x:0,
      motionPath: {
        path: "#path__sky",
        align: "#path__sky",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start:-0.4,
        end:-0.2
      },
      scrollTrigger:{
        trigger:'.learn-more__sky',
        scrub:3,
        start:'100px',
        end:'400px'
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className={`${styles.sky} learn-more__sky`}>
       <svg className={styles.svg} width={1000} height={1000} fill='none'>
        <path id='path__sky' d="M0,500a500,500 0 1,0 1000,0a500,500 0 1,0 -1000,0" />
      </svg>
      <div className={`${styles.item} learn-more__sky-item`}>
        {cloud_1 && <GatsbyImage image={cloud_1[0].gatsbyImageData} alt="cloud"/>}
      </div>
      <div className={`${styles.item} learn-more__sky-item`}>
        {cloud_2 && <GatsbyImage image={cloud_2[0].gatsbyImageData} alt="cloud"/>}
      </div>
      <div className={`${styles.item} learn-more__sky-item`}>
        {cloud_3 && <GatsbyImage image={cloud_3[0].gatsbyImageData} alt="cloud"/>}
      </div>
      <div className={`${styles.item} learn-more__sky-item`}>
        {plane && <GatsbyImage image={plane[0].gatsbyImageData} alt="plane"/>}
      </div>
    </div>
  )
}

export default Sky
