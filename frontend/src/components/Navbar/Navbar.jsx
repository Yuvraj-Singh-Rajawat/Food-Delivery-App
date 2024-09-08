import React, { useCallback, useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount, token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();
  const logout = () =>{
    setToken("")
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className='navbar py-5 flex justify-between items-center'>
      <Link to="/">
        <img src={assets.logo} alt=""  className='logo w-40'/>
      </Link>
      <ul className="navbar-menu list-none gap-5 text-[#49557e] text-[18px]">
        <Link to="/" onClick={() => setMenu("home")} className={menu==="home" ? "active":""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu" ? "active":""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>contact us</a>
      </ul>
      <div className="navbar-right flex items-center gap-10 max-[750px]:gap-5">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount()===0 ? "" : "dot absolute min-w-3 min-h-3 bg-red-400 rounded-md top-[-8px] right-[-8px]"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557e] border-[1px] border-solid border-red-400 px-7 py-2 rounded-[50px] cursor-pointer transition hover:bg-[#fff4f2] duration-300'>sign in</button> 
        : <div className='navbar-profile relative'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute hidden right-0 z-[1]"> 
              <li onClick={() => navigate("/myorders")} className='flex items-center gap-[10px] cursor-pointer pr-8 hover:text-[tomato]'>
                <img className='w-5' src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout} className='flex items-center gap-[10px] cursor-pointer pr-8 hover:text-[tomato]'>
                <img className='w-5' src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar