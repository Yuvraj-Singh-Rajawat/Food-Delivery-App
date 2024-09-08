import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%]'>
      <img src={assets.logo} alt="" className="logo " />
      <img src={assets.profile_image} alt="" className="profile w-10" />
    </div>
  )
}

export default Navbar