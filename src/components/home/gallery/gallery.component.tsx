import React, { useEffect, useState } from 'react'
import Item from './item.compoonent'
import useImage from '../../../hooks/useImage'
import * as styles from '../../../styles/components/home/gallery/gallery.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Gallery = () => {

  const [gallery_1,setGallery_1] = useImage("gallery-1")
  const [gallery_2,setGallery_2] = useImage("gallery-2")
  const [gallery_3,setGallery_3] = useImage("gallery-3")
  const [gallery_4,setGallery_4] = useImage("gallery-4")
  const [gallery_5,setGallery_5] = useImage("gallery-5")
  const [gallery_6,setGallery_6] = useImage("gallery-6")
  const [gallery_7,setGallery_7] = useImage("gallery-7")

  const [isDom,setIsDom] = useState<boolean>(false)

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
    gsap.fromTo('.home__gallery-item',{ opacity:0 },{
      opacity:1,
      stagger:{
        amount:2,
        from:'center'
      },
      scrollTrigger:{
        trigger:'.home__gallery',
        scrub:3,
        start:'-=300px',
        end:'+=300px'
      }
    })
  }

  useEffect(()=>{
    if(isDom){
      handleAnimate()
    }
    setIsDom(true)
  },[isDom])

  return (
    <div className={`${styles.gallery} home__gallery`}>
      <Item text="Where can you use Gastos?" />
      <Item image={gallery_1} />
      <Item image={gallery_2} />
      <Item image={gallery_3} />
      <Item image={gallery_4} />
      <Item image={gallery_5} />
      <Item image={gallery_6} />
      <Item image={gallery_7} />
      <Item text="Literally anywhere..." />
    </div>
  )
}

export default Gallery
