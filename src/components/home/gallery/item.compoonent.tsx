import React from 'react'
import * as styles from '../../../styles/components/home/gallery/item.module.scss'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ItemProps{
  text?:string;
  image?:{
    gatsbyImageData:IGatsbyImageData;
    src:string;
  }[];
}

const Item:React.FC<ItemProps> = ({text,image}) => {
  return (
    <div className={`${styles.item} home__gallery-item`}>
      {text && <h2>{text}</h2>}
      {image && <GatsbyImage className={styles.img} image={image[0].gatsbyImageData} alt="gallery-image" />}
    </div>
  )
}

export default Item
