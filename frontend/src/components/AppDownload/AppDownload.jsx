import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-20 text-center font-medium]' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms flex justify-center mt-10 gap-9">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload