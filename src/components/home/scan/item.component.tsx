import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import * as styles from '../../../styles/components/home/scan/item.module.scss'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ItemProps{
  heading:string;
  text:string;
  textBackground:string;
  imgName:string;
}

const Item:React.FC<ItemProps> = ({heading,text,textBackground,imgName}) => {

  const [image,setImage] = useImage(imgName)


  const handleText = (text:string) => {
    return [...text].map((l:string) => <span className='home__scan-item-letter'>{l}</span>)
  }

  const handleAnimate = (selector:string) =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(`${selector} .home__scan-item-img`,{ x:1000, opacity:0 }, { 
      x:0,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:selector,
        scrub:3,
        start:'-450px',
        end:'0px'
      }
    })
    gsap.fromTo(`${selector} .home__scan-item-details h2`,{ x:-1000,opacity:0 },{ 
      x:0,
      opacity:1, 
      scrollTrigger:{
        trigger:'.home__scan-item:first-of-type',
        scrub:3,
        start:'-450px',
        end:'0px'
      }
    })
    gsap.fromTo(`${selector} .home__scan-item-details p`,{ x:-1000,opacity:0 },{ 
      x:0,
      opacity:1, 
      scrollTrigger:{
        trigger:selector,
        scrub:3,
        start:'-450px',
        end:'0px'
      }
    })
    gsap.fromTo(`${selector} .home__scan-item-letter`,{ x:-1000,opacity:0 },{ 
      x:0,
      opacity:1, 
      stagger:{
        amount:0.2,
        from:'start'
      },
      scrollTrigger:{
        trigger:selector,
        scrub:1,
        start:'-450px',
        end:'0px'
      }
    })
  }
  

  useEffect(()=>{
    handleAnimate('.home__scan-item:first-of-type')
    handleAnimate('.home__scan-item:nth-of-type(2)')
    handleAnimate('.home__scan-item:last-of-type')
  },[])

  return (
    <div className={`${styles.item} home__scan-item`}>
      <div className={`${styles.details} home__scan-item-details`}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <h2 className={`${styles.text_background} home__text-background`}>{handleText(textBackground)}</h2>
      <div className={`${styles.image} home__scan-item-img`}>
        {image && <GatsbyImage image={image[0]?.gatsbyImageData} alt="scan-image" />}
      </div>
    </div>
  )
}

export default Item
