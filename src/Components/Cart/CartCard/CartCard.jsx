import {React, useState, useEffect} from 'react'

const CartCard = ({cartDetail, removeFromCart,isDarkModeClicked }) => {
    console.log('in Cartcard component cartDetails : ', cartDetail)
  return (
    <>
        <div className={`grid grid-cols-3  mx-auto w-[400px] sm:w-[650px] md:w-[780px] lg:w-[900px] xl:w-[1100px]  border-black border-2  border-t-0   divide-x divide-black
            ${isDarkModeClicked ? 'text-white' : 'text-black'}
            `}>
            <div className=' py-2 w-full'>
                <img className='w-[50px] mx-auto' src={cartDetail.productImg} alt="" />
            </div>
            <div className=' py-2 w-full'>
                <h1 className='text-center'>{cartDetail.productName}</h1>
            </div>
            <div className=' py-2  w-full flex  items-center justify-evenly'>
                <h1 className='text-center'> <span>{cartDetail.productPrice}</span> $</h1> <button onClick={removeFromCart} ><i className="fa-regular fa-circle-xmark text-red-500"></i></button>
            </div>
            </div>
    </>
  )
}

export default CartCard
