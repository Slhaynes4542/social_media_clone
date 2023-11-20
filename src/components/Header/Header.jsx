import { useState } from 'react'
import './Header.css'
import {
   FacebookRoundedIcon,
   SearchRoundedIcon,
   HomeRoundedIcon,
   OndemandVideoRoundedIcon,
   StorefrontRoundedIcon,
   GroupsRoundedIcon,
   SportsEsportsRoundedIcon,
   MessageRoundedIcon,
   NotificationsNoneRoundedIcon,
   AccountCircleRoundedIcon
 } from '../../utils/Icons'
 import facebook_logo from '../../assets/fbImgLogo.png'



function Header() {

  return (
  
    <div className="header">
        <div className='header-left'>
          {/* Facebook Image */} 
          <img src={facebook_logo} alt="facebook logo" className='facebook-logo' />
          

          {/* Search Bar */}
          <div className="search-bar">
            <SearchRoundedIcon fontSize='medium' className='search-icon icon'/>
            <input placeholder='search Facebook' className='input-bar' />
          </div>
        </div>
        <div className='header-center'>
            {/*Home Icon*/}
            <div className="icon">
            <HomeRoundedIcon fontSize='large' className='center-icon active'/>
            </div>
            
            {/*Video Icon*/}
            <div className="icon">
              <OndemandVideoRoundedIcon fontSize='large' className='center-icon'/>
            </div>
            {/*Marketplace Icon*/}
            <div className="icon">
              <StorefrontRoundedIcon fontSize='large' className='center-icon'/>
            </div>
            {/*Groups Icon*/}
            <div className="icon">
            <GroupsRoundedIcon fontSize='large' className='center-icon'/>
            </div>
            {/*Gaming Icon*/}
            <div className="icon">
              <SportsEsportsRoundedIcon fontSize='large' className='center-icon'/>
            </div>
        </div>
        <div className="header-right">
            {/*Messages Icon*/}
            <MessageRoundedIcon fontSize='large' className='right-icon'/>
            {/*Notification Icon*/}
            <NotificationsNoneRoundedIcon fontSize='large' className='right-icon'/>
            {/*Profile Image*/}
            <AccountCircleRoundedIcon fontSize='large' className='right-icon'/>
        </div>
    </div>

  )
}

export default Header
