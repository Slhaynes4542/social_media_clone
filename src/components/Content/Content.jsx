import { useState } from 'react'
import Feed from '../Feed/Feed.jsx'
import AsideLeft from '../AsideLeft/AsideLeft.jsx'
import './Content.css'
import AsideRight from '../AsideRight/AsideRight.jsx'
import CreatePost from '../CreatePost/CreatePost.jsx'

function Content() {

  return (
    <>
    <div className="content">
      {/*Aside : Apps*/}
      <AsideLeft/>
      
      <div className="center">
        {/*Create Post*/}
        <CreatePost/>
        {/*Feed*/}
        <Feed/>
      </div>

      {/*Aside : Contacts*/}
      <AsideRight/>
    </div>

    </>
  )
}

export default Content
