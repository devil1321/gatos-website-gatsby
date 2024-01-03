import React, { Children, ReactNode } from 'react'
import '../../styles/styles.scss'
import * as styles from '../../styles/components/global/layout.module.scss'
import { GlobalComponents } from '.'

const Layout:React.FC<{className:string; children:ReactNode}> = ({className,children}) => {
  return (
    <div className={styles.container}>
      <div className={className}>
        <GlobalComponents.Nav />
        {children}
        <GlobalComponents.FaqComponents.Faq />
        <GlobalComponents.Genius />
        <GlobalComponents.Footer />
      </div>
    </div>
  )
}

export default Layout

