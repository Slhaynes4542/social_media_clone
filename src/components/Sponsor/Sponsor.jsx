import { useState } from 'react'
import './Sponsor.css'



function Sponsor({image, name, site}) {

  return (
    <>
        <div className="sponsor">
            <img className='sponsor-img' src={image} alt="" />
            <div className="sponsor-info">
                <p>{name}</p>
                <a href={site}>{site}</a>
            </div>
            
        </div>
    </>
  )
}

export default Sponsor
