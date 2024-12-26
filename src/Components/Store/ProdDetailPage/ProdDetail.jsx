import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import Review from './Review/Review';
const ProdDetail = ({isDarkModeClicked , addToCart}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const prodDetails = location.state || {};
    console.log(prodDetails);
    const reviews = prodDetails.productReview
    console.log("reviews", reviews)    
  return (
    <>
        
        <div className={`mt-20 numbusBol
            ${isDarkModeClicked ? 'text-white' : 'text-black'}
            `}>
            <h1 onClick={()=>navigate(-1)} className='text-xl ml-10'><i className="fa-regular fa-circle-left"></i> Go Back</h1>
            
        </div>
        <div className={`max-w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[400px] max-sm:mt-10  mx-auto numbusBol
        ${isDarkModeClicked ? 'text-white' : 'text-black'}
            `}>
            <div className='flex justify-center max-sm:flex-col max-sm:items-center'>
                <div className={`w-[50%] max-sm:w-[80%] border-l-4
                    ${isDarkModeClicked ? 'border-white' : 'border-black'}
                    `}>
                    <img className='w-[200px] h-[100%] object-contain mx-auto' src={prodDetails.productImg} alt="" />
                </div>
                <div className='w-[50%] max-sm:w-[80%] max-sm:mt-4 flex flex-col justify-center items-start gap-10'>
                        <h1 className='text-xl '>{prodDetails.productName}</h1>
                        {/* Rating Here */}
                        <p className='font-mono font-extralight text-stone-500'>{prodDetails.productDesc}</p>
                        <h1 className={`text-xl 
                            
                            `}>Price: <span>{prodDetails.productPrice}</span>$</h1>
                        <button className={`px-4 py-2 border-2
                            ${isDarkModeClicked ? 'bg-white text-black hover:bg-black hover:text-white hover:border-white ' :
                                'bg-black text-white hover:bg-white hover:text-black hover:border-black '
                            }
                            rounded-lg`}
                            onClick={()=>{
                                console.log('Add to cart clicked ');
                                
                                addToCart(prodDetails)}}
                            >Add To Cart</button>
                </div>
            </div>
        </div>
        <div className='my-4'>
            <h1 className={`text-center text-2xl numbusBol my-4 
                ${isDarkModeClicked ? 'text-white' : 'text-black'}
                `}>Reviews</h1>
            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 numbusBol'>
                {
                    reviews.map((review)=><Review isDarkModeClicked={isDarkModeClicked} review={review}/>)
                }
                
            </div>
        </div>
        
    </>
  )
}

export default ProdDetail
