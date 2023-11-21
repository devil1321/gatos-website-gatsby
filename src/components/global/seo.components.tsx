import React from 'react'

interface SeoProps{
    title:string;
    meta:{
        name:string;
        content:string;
    }[]
}

const Seo:React.FC<SeoProps> = ({title,meta}) => {
  return (
    <>
      <title>{title}</title>
      {meta.map((m:any) => <meta name={m.name} content={m.content}></meta>)}
    </>
  )
}

export default Seo
