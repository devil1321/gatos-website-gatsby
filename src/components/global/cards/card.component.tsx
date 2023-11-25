import React from 'react'
import * as styles from '../../../styles/components/global/cards/card.module.scss'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface CardProps{
  image:{
    gatsbyImageData:IGatsbyImageData,
    src:string;
  }[]
}

const Card:React.FC<CardProps> = ({image}) => {
  return (
    <div className={styles.card}>
      {image && <GatsbyImage image={image[0].gatsbyImageData} alt="card-image" />}
    </div>
  )
}

export default Card
