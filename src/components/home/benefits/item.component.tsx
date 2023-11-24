import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import * as styles from '../../../styles/components/home/benefits/item.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image';

interface ItemProps{
  image:{
    gatsbyImageData:IGatsbyImageData,
    src:string
  }[],
  text:string;
}

const Item:React.FC<ItemProps> = ({image,text}) => {
  return (
    <div className={`${styles.item} home__benefits-item`}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="benefits-image" />}
      <h2>{text}</h2>
    </div>
  )
}

export default Item
