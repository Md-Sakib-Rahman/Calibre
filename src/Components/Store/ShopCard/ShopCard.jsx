import React from 'react'
import { Link } from 'react-router-dom';
import Reveal from '../../Animations/Reveal'
const ShopCard = (props) => {
    const stars = [];
    const prodDetails = {
        productImg: props.productImg,
        productName: props.productName,
        productDesc: props.productDesc,
        productPrice: props.productPrice,
        productRating: props.productRating,
        productReview: props.productReviews
      };
      
      
    for (let i = 0; i <= props.productRating; i++) {
    stars.push(<span key={i}><i className="fa-solid fa-star text-yellow-300 max-sm:text-[10px] "></i></span>); 
    }
    
  return (
    <>
       
        <div className='mx-auto' >
        <Reveal isDarkModeClicked={props.isDarkModeClicked}>
            <div className={` ${props.isDarkModeClicked ? 'border-white' : 'border-black'}
                border-2 w-[300px] h-[450px] max-sm:w-[200px] max-sm:h-[300px] flex flex-col justify-center items-center gap-6 max-sm:gap-1 rounded-2xl `}>
                <Link to="/proddetails" state={prodDetails} className='flex flex-col justify-center items-center '>
                        <div className='w-[200px] h-[200px] max-sm:w-[120px] max-sm:h-[120px] pt-4'>
                            <img className='w-[200px] h-[200px] max-sm:w-[100px] max-sm:h-[100px] object-contain' src={props.productImg} alt="" />
                        </div>
                        <div className='ml-4 self-start '>
                            <h1 className={` 
                                ${(props.productName.length < 23) ? ' text-md max-sm:text-[16px]' : 'text-sm' }
                                `}>{props.productName}</h1>
                            <div className='flex justify-start items-center'>
                            {stars}

                            </div>
                            <p className='h-[80px] max-sm:h-[50px] max-sm:text-[9px] text-stone-400 font-mono font-extralight'>{props.productDesc.slice(0,75)}...</p>
                            <h1>Price: <span>{props.productPrice}</span>$</h1>
                        </div>
                </Link>
                <div className='flex justify-center mt-2 mb-4' >
                    <button className={`
                    ${props.isDarkModeClicked ? 'bg-white text-black hover:bg-black hover:text-white hover:border-white' : 'bg-black text-white hover:bg-white hover:text-black hover:border-black'}
                    px-4 py-2  rounded-xl max-sm:text-sm
                     hover:border-2

                    `}
                    onClick={()=>{
                        console.log('Add to cart clicked ');
                        
                        props.addToCart(prodDetails)}}

                    >Add To Cart</button>
                </div>
            </div>
        </Reveal>
            </div>
            
    </>
  )
}

export default ShopCard
