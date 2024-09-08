import React, { useContext, useEffect, useState } from 'react'
import "./MyOrders.css"
import { StoreContext } from '../../context/StoreContext';
import assert from 'assert';
import { assets } from '../../assets/assets';
import axios from 'axios';

const MyOrders = () => {

  const [data, setData] = useState([]);
  const {url, token} = useContext(StoreContext);

  const fetchOrders = async () => {
      const response = await axios.post(`${url}/api/order/userorders`,{}, {headers: {token}});
      setData([...response.data.orders]);
      console.log(data);
  }

  useEffect(() => {
    if(token){
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-orders my-[50px]'>
      <h2>My Orders</h2>
      <div className="container flex flex-col gap-[20px] mt-[30px]">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img className='w-[50px]' src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if(index === order.items.length-1){
                  return item.name+" x "+item.quantity
                }
                else{
                  return item.name+" x "+item.quantity+" , "
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span className='text-[tomato]'>&#x25cf;</span> <b className='font-medium text-[#454545]'>{order.status}</b></p>
              <button className='border-none py-3 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] max-[900px]:text-[10px]'>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders