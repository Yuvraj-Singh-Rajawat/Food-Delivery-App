import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='food-item w-full m-auto rounded-2xl'>
      <div className="food-item-img-container relative">
        <img className='food-item-image w-full ' src={url+"/images/"+image} alt="" />
        {
          !cartItems[id] ? 
            <img className='add w-9 absolute bottom-4 cursor-pointer rounded-lg right-4' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> 
            : 
            <div className='food-item-counter absolute bottom-4 right-3 flex items-center gap-2 p-1 rounded-[50px] bg-white '>
              <img className='w-7 cursor-pointer' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img className='w-7 cursor-pointer' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-3">
          <p className='text-xl font-medium'>{name}</p>
          <img className='w-16' src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc text-[#676767] text-[12px]'>{description}</p>
        <p className="food-item-price text-[tomato] text-xl">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem