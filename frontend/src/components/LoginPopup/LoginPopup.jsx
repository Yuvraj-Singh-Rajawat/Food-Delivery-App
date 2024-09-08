import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext);
  const [currState, setCurrentState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((data) => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup absolute z-[1] w-full h-full bg-[#00000090] grid'>
      <form onSubmit={onLogin} className="login-popup-container place-self-center bg-white text-[#808080] flex flex-col gap-6 py-6 px-8 rounded-lg text-[14px] animate-fadeIn">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className='font-bold text-2xl'>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Sign Up" ? <input name='name' type="text" placeholder='Your name' onChange={onChangeHandler} value={data.name} required/> : <></>}
          
          <input type="text" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your email' required/>
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required/>
        </div>
        <button type='submit' className='border-none p-3 text-white rounded-[4px] bg-[tomato] text-[15px] cursor-pointer'>{currState === "Sign Up"?"Create account": "Login"}</button>
        <div className="login-popup-condition flex items-start gap-2 mt-[-15px]">
          <input className='mt-[5px]' type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
        ?<p>Create a new account? <span className='text-[tomato] font-medium cursor-pointer' onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span className='text-[tomato] font-medium cursor-pointer' onClick={() => setCurrentState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup