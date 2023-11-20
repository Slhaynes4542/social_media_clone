import { useState } from 'react'
import './AsideLeft.css'
import {
  MessageRoundedIcon,
  FlagRoundedIcon,
  AccountCircleRoundedIcon,
  PeopleRoundedIcon,
  VideoLibraryRoundedIcon,
  StorefrontRoundedIcon
} from '../../utils/Icons'


function AsideLeft({name}) {

  return (
    <>
        <div className="aside-left">
          <div className="user tab">
          <AccountCircleRoundedIcon color='primary' className='left-icon'/>
            <p>Samuel Haynes</p>
          </div>
          <div className="pages tab">
            <FlagRoundedIcon color='primary' className='left-icon'/>
            <p>Pages</p>
          </div>
          <div className="friends tab">
            <PeopleRoundedIcon color='primary' className='left-icon'/>
            <p>Friends</p>
          </div>
          <div className="messenger tab">
            <MessageRoundedIcon color='primary' className='left-icon'/>
            <p>Messenger</p>
          </div>
          <div className="marketplace tab">
            <StorefrontRoundedIcon color='primary' className='left-icon'/>
            <p>Marketplace</p>
          </div>
          <div className="videos tab">
            <VideoLibraryRoundedIcon color='primary' className='left-icon'/>
            <p>Videos</p>
          </div>
            


        </div>
    </>
  )
}

export default AsideLeft
