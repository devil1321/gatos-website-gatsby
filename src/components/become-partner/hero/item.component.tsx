import React from 'react'
import * as styles from '../../../styles/components/become-partner/hero/item.module.scss'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface ItemProps{
    className?:string;
    img:IGatsbyImageData
    translateX:string;
    translateY:string;
}

const Item:React.FC<ItemProps> = ({className,img,translateX,translateY}) => {
  return (
    <div className={`${styles.item} ${className}`} style={{transform:`translate(${translateX},${translateY})`}}>
      {img && <GatsbyImage image={img} alt="hero" />}
    </div>
  )
}

export default Item
