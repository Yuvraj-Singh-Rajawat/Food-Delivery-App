import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[5vw] pt-20 mt-20' id='footer'>
      <div className="footer-content w-full grid gap-20 max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-9">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus error sunt placeat modi, numquam vero provident laborum dolorum explicabo iusto!</p>
          <div className="footer-social-icons w-10 flex gap-3">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full my-5 border-none bg-gray-400 h-[2px]' />
      <p className="footer-copyright max-[750px]:text-center">Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer