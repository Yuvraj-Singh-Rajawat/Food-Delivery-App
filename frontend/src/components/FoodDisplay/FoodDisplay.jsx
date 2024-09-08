import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import "./FoodDisplay.css"

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display mt-8' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list grid mt-8 gap-8 gap-x-12">
        {food_list.map((item, index) => {
          if(category==='All' || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay