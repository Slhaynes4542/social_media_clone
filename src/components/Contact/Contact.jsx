import { useState } from 'react'
import './Contact.css'
import {
  AccountCircleRoundedIcon,
} from '../../utils/Icons'



function Contact({image, name}) {

  return (
    <>
        <div className="contact">
            <AccountCircleRoundedIcon/>
              <p className='contact-item'>{name}</p>
        </div>
    </>
  )
}

export default Contact
