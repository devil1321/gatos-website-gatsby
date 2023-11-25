import React, { useState } from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../../../styles/components/global/faq/item.module.scss'

const Item = () => {

  const [plus,setPlus] = useImage('plus')
  const [minus,setMinus] = useImage('minus')
  const [isOpen,setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles.item}>
      <h2 onClick={()=>setIsOpen(!isOpen)}>
        <span>Question</span>
        {
            !isOpen
            ? plus && <GatsbyImage image={plus[0].gatsbyImageData} alt="plus" />
            : minus && <GatsbyImage image={minus[0].gatsbyImageData} alt="minus" />
        }
      </h2>
      {isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui ultrices et scelerisque rutrum nec integer rhoncus et. Non luctus urna adipiscing diam quis pellentesque vel hendrerit laoreet. Neque in nisl maecenas erat nunc diam pellentesque sed pretium. Egestas aliquet facilisis vel gravida in vitae dictumst congue.</p>}
    </div>
  )
}

export default Item
