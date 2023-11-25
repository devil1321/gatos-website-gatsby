import React from 'react'
import * as styles from '../../../styles/components/home/rewards/dot.module.scss'

interface DotProps{
  size:string;
  color:string;
  top:string;
  left:string;
}

const Dot:React.FC<DotProps> = ({size,color,top,left}) => {
  return (
    <div className={`${styles.dot} home__rewards-dot`} style={{
      width:size,
      height:size,
      top:top,
      left:left,
      backgroundColor:color
    }}>
    </div>
  )
}

export default Dot
