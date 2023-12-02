import React from 'react'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../../../styles/components/become-partner/steps/item.module.scss'
interface ItemProps{
  img:string;
  heading:string;
  subHeading:string;
  text:string;
}


const Item:React.FC<ItemProps> = ({img,heading,subHeading,text}) => {

  const [image,setImage] = useImage(img)

  return (
    <div className={styles.item}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="step-image" />}
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Item
