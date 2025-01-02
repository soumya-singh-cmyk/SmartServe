import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.newlogo} alt="" />
      <span>ADMIN PANEL</span>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
