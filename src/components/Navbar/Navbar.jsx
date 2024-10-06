import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import dropDownIcon from '../../assets/caret_icon.svg'
import profileImage from '../../assets/profile_img.png'
import { logOut } from '../../firebase'


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Language</li>
      </ul>
    </div>
    <div className="navbar-right">
      <img src={searchIcon} alt="" className='icons' />
      <p>Children</p>
      <img src={bellIcon} alt="" className='icons' />
    <div className="navbar-profile">
    <img src={profileImage} alt="" className='profile' />
    <img src={dropDownIcon} alt=""  />
<div className="dropDown">
  <p onClick={()=>{
    logOut();
  }}>Sign Out Of Netflix</p>
</div>

    </div>
    
    
    </div>
    </div>
  )
}

export default Navbar 
