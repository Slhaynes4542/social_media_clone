import { useState } from 'react'
import './CreatePost.css'
import {
    AccountCircleRoundedIcon,
    AddPhotoAlternateRoundedIcon,
    VideoLibraryRoundedIcon,
    MoodRoundedIcon
  } from '../../utils/Icons'

function AddPost(postList, setList, text, url){
    const newPost = {img_url: url, name: "Sam Haynes", message: text}
    setList([newPost,...postList])
    console.log("In add post")
    
    //TO-DO: clear input
}

function CreatePost(props) {

    const [textInput, setTextInput] = useState(); 
    const [imgInput, setImgInput] = useState(); 

  return (
    <>
        <div className="create-post">
            <div className="entry">
                {/*profile image*/}
                {/*text entry*/}
                 {/* Search Bar */}
                <div className="entry-bar">
                    <input id="text-input" value={textInput} onInput={e=> setTextInput(e.target.value)} placeholder="What's on your mind, Sam?" className='input-bar' />
                </div>
                {/*url entry*/}
                <div className="entry-bar">
                    <input placeholder="Enter a URL (optional)" value={imgInput} onInput={e=>setImgInput(e.target.value)} className='input-bar' />
                </div>
            </div>
            <div className="submit">
                {/*live video*/}
                <div className="live-video submit-button">
                    <VideoLibraryRoundedIcon className='video-icon'/>
                    <h3>Live video</h3>
                </div>
                {/*photo/video*/}
                <div className="photo submit-button">
                    <AddPhotoAlternateRoundedIcon className='photo-icon'/>
                    <h3>Photo/video</h3>
                </div>
                {/*feeling/activity*/}
                <div onClick={() => AddPost(props.posts, props.setPostList, textInput, imgInput)} className="feelings submit-button">
                    <MoodRoundedIcon className='feeling-icon'/>
                    <h3>Feeling/interaction</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost