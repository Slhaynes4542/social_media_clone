import { useState } from 'react'
import Feed from '../Feed/Feed.jsx'
import AsideLeft from '../AsideLeft/AsideLeft.jsx'
import './Content.css'
import AsideRight from '../AsideRight/AsideRight.jsx'

function Content() {

  return (
    <>
    <div className="content">
      {/*Aside : Apps*/}
      <AsideLeft/>
      {/*Feed*/}
      <Feed/>
      {/*Aside : Contacts*/}
      <AsideRight/>
    </div>

    </>
  )
}

export default Content
