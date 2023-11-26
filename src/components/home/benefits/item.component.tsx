import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import * as styles from '../../../styles/components/home/benefits/item.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image';

interface ItemProps{
  image:{
    gatsbyImageData:IGatsbyImageData,
    src:string
  }[],
  heading:string;
  text:string;
}

const Item:React.FC<ItemProps> = ({image,heading,text}) => {
  return (
    <div className={`${styles.item} home__benefits-item`}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="benefits-image" />}
      <div className={styles.details}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Item
