import { useState } from 'react'
import Post from '../Post/Post.jsx'
import star_image from '../../assets/stars_background.jpg'
import summer21 from '../../assets/summer.png'

function Feed() {

  return (
    <>
    <div className="feed">
      <Post name="Samuel Haynes" image={star_image}/>
      <Post name="Samuel Haynes" image={summer21}/>
      <Post name="Daniel Kins"/>
    </div>

  
    </>
  )
}

export default Feed
