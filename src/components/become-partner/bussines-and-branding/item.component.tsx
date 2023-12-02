import React from 'react'
import * as styles from '../../../styles/components/become-partner/bussines-and-branding/item.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image';
import useImage from '../../../hooks/useImage';

interface ItemProps{
    img:string;
    heading:string;
    text:string;
}

const Item:React.FC<ItemProps> = ({img,heading,text}) => {

  const [image,setImage] = useImage(img)

  return (
    <div className={styles.item}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="bussines-and-branding-item" />}
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Item