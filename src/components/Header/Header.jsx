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
            <input placeholder='search' className='input-bar' />
          </div>
        </div>
        <div className='header-center'>
            {/*Home Icon*/}
            <HomeRoundedIcon fontSize='large' className='center-icon icon active'/>
            {/*Video Icon*/}
            <OndemandVideoRoundedIcon fontSize='large' className='center-icon icon'/>
            {/*Marketplace Icon*/}
            <StorefrontRoundedIcon fontSize='large' className='center-icon icon'/>
            {/*Groups Icon*/}
            <GroupsRoundedIcon fontSize='large' className='center-icon icon'/>
            {/*Gaming Icon*/}
            <SportsEsportsRoundedIcon fontSize='large' className='center-icon icon'/>
        </div>
        <div className="header-right">
            {/*Messages Icon*/}
            <MessageRoundedIcon fontSize='large' className='right-icon icon'/>
            {/*Notification Icon*/}
            <NotificationsNoneRoundedIcon fontSize='large' className='right-icon icon'/>
            {/*Profile Image*/}
            <AccountCircleRoundedIcon fontSize='large' className='right-icon icon'/>
        </div>
    </div>

  )
}

export default Header
