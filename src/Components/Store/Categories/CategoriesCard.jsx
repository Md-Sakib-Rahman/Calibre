import React from 'react'

const CategoriesCard = ({catImg, catName, isDarkModeClicked, handleCategory}) => {
  return (
   
    <div className='mx-auto' >
       
            <div
            onClick={()=>handleCategory(catName)}
            className={`group catCard flex justify-start items-center numbusBol
                ${isDarkModeClicked ? 'border-white bg-white hover:bg-black hover:text-white text-black' : 'border-black bg-black hover:bg-white hover:text-black text-white'}
                 border-2  max-w-[350px] w-[300px] max-sm:w-[160px] hover:w-[330px] max-sm:hover:w-[100%] max-sm:mx-auto h-32  
                   rounded-3xl p-4 max-sm:p-1 transition-all ease-in-out max-sm:text-sm`}>
                <div className='grayscale group-hover:grayscale-0 transition-all ease-in-out max-w-52 '>
                <img src={catImg} className=' group-hover:w-56  w-32 max-h-32 object-scale-down transition-all ease-in-out ' alt="" />
                </div>
                <div>
                    <h1>{catName=== 'All' ? 'Reset' : catName }</h1>
                </div>
            </div>
            
    </div>
    
  )
}

export default CategoriesCard
