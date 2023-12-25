import { useState } from 'react'
import Post from '../Post/Post.jsx'
import star_image from '../../assets/stars_background.jpg'
import summer21 from '../../assets/summer.png'
import jsonData from '../../data/data.json'

function Feed() {
  

  return (
    <>
    <div className="feed">
      
      {
        jsonData.posts.map( (item)=>(
          <Post name={item.name} image={item.img_url} text={item.message}></Post>
        ))
      }

    </div>

  
    </>
  )
}

export default Feed
