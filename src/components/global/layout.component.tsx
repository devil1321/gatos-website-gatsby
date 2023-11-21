import React, { Children, ReactNode } from 'react'
import '../../styles/styles.scss'
import { HomeComponents } from '../home'
import { GlobalComponents } from '.'

const Layout:React.FC<{className:string; children:ReactNode}> = ({className,children}) => {
  return (
    <div className={className}>
      <GlobalComponents.Nav />
      {children}
      <GlobalComponents.CardsComponents.Cards />
      <GlobalComponents.Faq />
      <GlobalComponents.Footer />
    </div>
  )
}

export default Layout

