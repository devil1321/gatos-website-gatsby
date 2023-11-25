import React, { Children, ReactNode } from 'react'
import '../../styles/styles.scss'
import { GlobalComponents } from '.'

const Layout:React.FC<{className:string; children:ReactNode}> = ({className,children}) => {
  return (
    <div className="main-container">
      <div className={className}>
        <GlobalComponents.Nav />
        {children}
        <GlobalComponents.CardsComponents.Cards />
        <GlobalComponents.FaqComponents.Faq />
        <GlobalComponents.Genius />
        <GlobalComponents.Footer />
      </div>
    </div>
  )
}

export default Layout

