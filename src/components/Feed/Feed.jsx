import { useState } from 'react'
import Post from '../Post/Post.jsx'
import star_image from '../../assets/stars_background.jpg'
import summer21 from '../../assets/summer.png'
import jsonData from '../../data/data.json'
import CreatePost from '../CreatePost/CreatePost.jsx'

function AddPost(){
  
}

function Feed() {
  
  const posts_list = jsonData; 
  var [postList, setPostList] = useState(jsonData.posts);

  return (
    <>
    <div className="feed">
        {/*Create Post*/}
        <CreatePost posts={postList} setPostList = {setPostList}/>
      {
        postList.map( (item)=>(
          <Post name={item.name} image={item.img_url} text={item.message}></Post>
        ))
      }

    </div>

  
    </>
  )
}

export default Feed
