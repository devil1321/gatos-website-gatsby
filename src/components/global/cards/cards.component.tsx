import React from 'react'
import useImage from '../../../hooks/useImage'
import Card from './card.component'
import * as styles from '../../../styles/components/global/cards/cards.module.scss'

const Cards = () => {

  const [recognized_1,setRecognized_1] = useImage("recognized-1")
  const [recognized_2,setRecognized_2] = useImage("recognized-2")
  const [recognized_3,setRecognized_3] = useImage("recognized-3")
  const [recognized_4,setRecognized_4] = useImage("recognized-4")
  const [recognized_5,setRecognized_5] = useImage("recognized-5")

  return (
    <div className={styles.cards}>
      <h2>Recognized</h2>
      <Card image={recognized_1} />
      <Card image={recognized_2} />
      <Card image={recognized_3} />
      <Card image={recognized_4} />
      <Card image={recognized_5} />
    </div>
  )
}

export default Cards
