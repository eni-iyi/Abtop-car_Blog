import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div>
      <span className='sus'>Suscribe to our news letter</span>
        <span><input type='email' placeholder='Email'/></span>
      </div>
       <div className='icon'>
       <span><BsFacebook/></span>
        <span><BsTwitter/></span>
        <span><BsInstagram/></span>
       </div>
       
    </div>
  )
}

export default Footer