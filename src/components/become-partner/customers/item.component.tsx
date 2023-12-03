import React from 'react'
import * as styles from '../../../styles/components/become-partner/customers/item.module.scss'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ItemProps{
  img:string;
  left:string;
  top:string;
}

const Item:React.FC<ItemProps> = ({img,left,top}) => {

  const [image,setImage] = useImage(img)

  return (
    <div className={styles.item} style={{left:left,top:top}}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="customers-item-img" />}
    </div>
  )
}

export default Item
