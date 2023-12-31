import { useState } from 'react'
import './Contact.css'
import {
  AccountCircleRoundedIcon,
} from '../../utils/Icons'



function Contact({image, name}) {

  return (
    <>
        <div className="contact-item">
            <AccountCircleRoundedIcon className='contact-img'/>
              <p>{name}</p>
        </div>
    </>
  )
}

export default Contact
