import { useState } from 'react'
import './CreatePost.css'
import {
    AccountCircleRoundedIcon,
    AddPhotoAlternateRoundedIcon,
    VideoLibraryRoundedIcon,
    MoodRoundedIcon
  } from '../../utils/Icons'


function CreatePost() {

  return (
    <>
        <div className="create-post">
            <div className="entry">
                {/*profile image*/}
                {/*text entry*/}
                 {/* Search Bar */}
                <div className="entry-bar">
                    <input placeholder="What's on your mind, Sam?" className='input-bar' />
                </div>
                {/*url entry*/}
                <div className="entry-bar">
                    <input placeholder="Enter a URL (optional)" className='input-bar' />
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
                <div className="feelings submit-button">
                    <MoodRoundedIcon className='feeling-icon'/>
                    <h3>Feeling/interaction</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost