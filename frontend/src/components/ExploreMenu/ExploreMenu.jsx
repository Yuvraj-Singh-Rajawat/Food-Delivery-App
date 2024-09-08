import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] font-medium text-4xl'>Explore our menu</h1>
      <p className='explore-menu-text max-w-[60%] text-[#808080] max-[1050px]:max-w-[100%]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining expreience, one delicious meal at a time</p>
      <div className="explore-menu-list flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={`${category===item.menu_name? "active":""} w-[7.5vw] min-w-20 cursor-pointer rounded-lg`} src={item.menu_image} alt="" />
              <p className='mt-3 text-[#747474] cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-3 h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu