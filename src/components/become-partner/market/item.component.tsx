import React from 'react'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../../../styles/components/become-partner/market/item.module.scss'
interface ItemProps{
  imgFront:string;
  imgBack?:string;
  heading:string;
  text:string;
}


const Item:React.FC<ItemProps> = ({imgFront,imgBack,heading,text}) => {

  const [front,setFront] = useImage(imgFront)
  const [back,setBack] = useImage(imgBack)

  return (
    <div className={styles.item}>
      {front && <GatsbyImage className={styles.front} image={front[0].gatsbyImageData} alt="market-image" />}
      {back && <GatsbyImage className={styles.back} image={back[0]?.gatsbyImageData} alt="market-image" />}
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Item
