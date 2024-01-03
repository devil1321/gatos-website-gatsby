import React,{ MutableRefObject, useEffect, useRef, useState } from 'react'
import * as styles from '../../../styles/components/learn-more/about/buildings.module.scss'
import useImage from '../../../hooks/useImage'
const Buildings = () => {

  const [image,setImage] = useImage('circle-bg')
  const [imageCanvas,setImageCanvas] = useState<any>(null)
  const [isLoad,setIsLoad] = useState<boolean>(false)

  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>
  const image_ctx = useRef(null) as MutableRefObject<any>
  
  const handleDraw = () =>{
    const ctx = canvasRef.current?.getContext('2d') as CanvasRenderingContext2D
    if(image){
      image_ctx.current.src = image[1].original.src
    }
    canvasRef.current.width = 2066
    canvasRef.current.height = 2066
    image_ctx.current.onload = () =>{
      ctx.drawImage(image_ctx.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }

  const handleAnimate = () =>{
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
    ctx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
    ctx.rotate(0.1 * Math.PI / 180);
    ctx.translate(-canvasRef.current.width / 2, -canvasRef.current.height / 2);
    ctx.drawImage(image_ctx.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    requestAnimationFrame(handleAnimate)
  }

  useEffect(()=>{
    if(typeof window !== undefined){
      image_ctx.current = new Image()
    }
    if(image_ctx.current){
      handleDraw()
      handleAnimate()
    }
    setIsLoad(true)
  },[image,isLoad])

  return (
    <div className={styles.buildings}>
      <div className={styles.mask}></div>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </div>
  )
}

export default Buildings
