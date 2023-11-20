import { useState } from 'react'
import './Post.css'
import react_icon from '../../assets/react.svg'
import {
  AccountCircleRoundedIcon,
  ThumbUpOffAltIcon,
  CommentIcon,
  ShareIcon,
  RecommendTwoToneIcon,
    FavoriteTwoToneIcon,
    StarsTwoToneIcon
} from '../../utils/Icons'

function Post({image, name, text, content}) {

  return (
    <div className="post">
        {/*profile : img, name*/}
        <div className="post-signature">
        <AccountCircleRoundedIcon/>
        <p>{name}</p>
        </div> 
        
        {/*content: text */}
        <p>This is a post I made today</p>
        {/*content: image*/}
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className='interaction-results'>
          <p>125</p>
          <RecommendTwoToneIcon className='like-icon' color='primary'/>
          <FavoriteTwoToneIcon className='favorite-icon'/>
        </div>
        <div className='interaction_bar'>
          <div className='like-button'>
             {/*Like button*/}
             <ThumbUpOffAltIcon/>
            <p>Like</p>
          </div>
          <div className='comment-button'>
            {/*Comment Button*/}
            <CommentIcon/>
            <p>Comment</p>
          </div>
          <div className="share-button">
            {/*Share Button*/}
            <ShareIcon/>
            <p>Share</p>
          </div>
          
          
        </div>
        
    </div>
  )
}

export default Post