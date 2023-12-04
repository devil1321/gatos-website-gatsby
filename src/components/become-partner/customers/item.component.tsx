import React from 'react'
import * as styles from '../../../styles/components/become-partner/customers/item.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ItemProps{
  className:string;
  img:string;
  left:string;
  top:string;
}

const Item:React.FC<ItemProps> = ({className,img,left,top}) => {

  const [image,setImage] = useImage(img)

  return (
    <div className={`${styles.item} ${className}`} style={{left:left,top:top}}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="customers-item-img" />}
    </div>
  )
}

export default Item
