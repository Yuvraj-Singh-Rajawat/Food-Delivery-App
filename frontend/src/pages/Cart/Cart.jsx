import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount,url} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItems[item._id]>0){
            return(
              <div>
                <div className='cart-items-title cart-items-item my-[10px] text-black'>
                  <img className='w-[50px]' src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross cursor-pointer'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-20 flex justify-between max-[750px]:flex-col-reverse">
        <div className="cart-total flex-1 flex-col gap-5">
          <h2 className='text-2xl font-bold'>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555] mt-4">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr className='my-2' />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()>0 ? 2 : 0}</p>
            </div>
            <hr className='my-3' />
            <div className="cart-total-details flex justify-between text-[#555] mb-3">
              <b>Total</b>
              <b>{getTotalCartAmount()>0 ?getTotalCartAmount()+2 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")} className='border-none text-white bg-[tomato] py-3 rounded cursor-pointer]
          '>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-1 max-[750px]:justify-start">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input mt-3 flex justify-between items-center bg-[#eaeaea] rounded">
              <input className='bg-transparent border-none outline-none pl-3' type="text" placeholder='promo code'/>
              <button className='py-3 px-[5px] bg-black border-none text-white rounded' >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart