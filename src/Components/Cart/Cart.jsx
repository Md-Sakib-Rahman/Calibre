import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import CartCard from './CartCard/CartCard'
const Cart = ({isDarkModeClicked, cartState, removeFromCart, totalPrice}) => {

    const navigate= useNavigate()
    
    
  return (
    <>

        <div className={`mt-20 numbusBol
            ${isDarkModeClicked ? 'text-white' : 'text-black'}
            `}>
            <h1 onClick={()=>navigate(-1)} className='text-xl ml-10'><i className="fa-regular fa-circle-left"></i> Go Back</h1>
            
        </div>
        <div className='w-full  '>
            <h1 className={`text-xl 
                ${isDarkModeClicked ? 'text-white' : 'text-black'}
                numbusBol text-center my-10`}>Your Cart</h1>
            <div className={`grid grid-cols-3  mx-auto w-[400px] sm:w-[650px] md:w-[780px] lg:w-[900px] xl:w-[1100px] 
                ${isDarkModeClicked ? 'bg-white' : 'bg-black'}
                border-black border-2   divide-x divide-black `}>
            <div className=' py-2 w-full'>
                <h1 className={`text-center ${isDarkModeClicked ? 'text-black': 'text-white'} `}>Image</h1>
            </div>
            <div className= 'py-2 w-full'>
                <h1 className={`text-center ${isDarkModeClicked ? 'text-black': 'text-white'} `}>Description</h1>
            </div>
            <div className=' py-2  w-full'>
                <h1 className={`text-center ${isDarkModeClicked ? 'text-black': 'text-white'} `}>Price</h1>
            </div>
            </div>
        </div>
        {cartState.map((cartDetail, index) => (
                <CartCard isDarkModeClicked={isDarkModeClicked} key={index} cartDetail={cartDetail} removeFromCart={() => removeFromCart(index)} />
            ))}

         <div className='mt-20 bg-white flex flex-col items-center gap-4 p-4 w-[400px] sm:w-[650px] md:w-[780px] lg:w-[900px] xl:w-[1100px] mx-auto numbusBol border-2 border-black rounded-xl'>
            
            <h1>Total: {totalPrice} $</h1>    
            <div>
                <h1 className='text-center'>Enter Your Details: </h1>
                <div className='self-start flex items-center justify-between gap-4 mt-4'>
                    <label htmlFor="Name">Full Name</label>
                    <input className='py-2 rounded-lg border-black border-2' id='Name' type="text" />
                </div>
                <div className='self-start flex items-center justify-between gap-4 mt-4'>
                    <label htmlFor="Phone">Phone Number</label>
                    <input className='py-2 rounded-lg border-black border-2' id='Phone' type="number" />
                </div>
                <div className='self-start flex items-center justify-between gap-4 mt-4'>
                    <label htmlFor="Email">Email:</label>
                    <input className='py-2 rounded-lg border-black border-2' id='Email' type="email" />
                </div>
                <div className='self-start flex items-center justify-between gap-4 mt-4'>
                    <label htmlFor="Address">Address</label>
                    <input className='py-2 rounded-lg border-black border-2' id='Address' type="text" />
                </div>
                

            </div>
            <button className='bg-black w-40 text-white px-4 py-2 mx-auto rounded-xl' >Confirm Order</button>
        </div>   
       
        
    </>
  )
}

export default Cart
