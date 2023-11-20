import { useState } from 'react'
import './AsideRight.css'
import Contact from '../Contact/Contact.jsx'
import Sponsor from '../Sponsor/Sponsor.jsx'

/*temp imports*/
import burger_king_logo from '../../assets/Burger-King-Logo.png'
import colgate_logo from '../../assets/colgate_logo.png'


function AsideRight() {

  return (
    <>
        <div className="aside-right">
          {/* Sponsors */}
          <div className="sponsors">
            <h2>Sponsors</h2>
            <Sponsor image = {burger_king_logo} name="Burger King" site="https://www.bk.com/"/>
            <Sponsor image={colgate_logo} name="Colgate" site="https://www.colgate.com/"/>
          </div>
          {/* Contacts */}
            <div className="contacts">
              <div className="contacts-header">
                 <h2>Contacts</h2>
              </div>
              <Contact name="Ryan Kowsel"/>
            <Contact name="Henry Outsok"/>
            <Contact name="Michael Knowfl"/>
            <Contact name="Piper Knight"/>
            <Contact name="Steve Carell"/>
            <Contact name="Toby Maguire"/>
            <Contact name="Jason Jackson"/>
            <Contact name="Eugene Vasserman"/>
            <Contact name="Jorge Valenzuela"/>          
            </div>
            
            
        </div>
    </>
  )
}

export default AsideRight
