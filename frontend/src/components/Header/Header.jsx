import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header h-[34vw] mx-auto my-[30px] bg-contain relative'>
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] max-[1050px]:max-w-[45%] max-[750px]:max-w-[55%]">
        <h2 className='font-medium text-white'>Order your favourite food here</h2>
        <p className='text-white text-base max-[750px]:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining expreience, one delicious meal at a time.</p>
        <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white rounded-[30px] max-[750px]:my-[2vw] max-[750px]:mx-[4vw]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header