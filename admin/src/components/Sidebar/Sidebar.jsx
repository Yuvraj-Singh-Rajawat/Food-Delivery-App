import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border-t-0'>
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink to="/add" className="sidebar-option flex items-center gap-3 border-r-0 py-2 px-[10px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option flex items-center gap-3 border-r-0 py-2 px-[10px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className="sidebar-option flex items-center gap-3 border-r-0 py-2 px-[10px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar