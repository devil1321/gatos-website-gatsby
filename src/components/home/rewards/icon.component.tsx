import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from '../../../styles/components/home/rewards/icon.module.scss'


interface IconProps{
  image:{
    gatsbyImageData:IGatsbyImageData;
    src:string;
  }[],
  top:string;
  left:string;
}

const Icon:React.FC<IconProps> = ({image,top,left}) => {
  return (
    <div className={`${styles.icon} home__rewards-icon`} style={{top:top,left:left}}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="icon" />}
    </div>
  )
}

export default Icon
