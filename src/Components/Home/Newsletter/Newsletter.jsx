import React from 'react'
import Shoe from '../../../assets/images/shoes.jpg'
import Crowd from '../../../assets/images/crowd.jpg'
import Reveal from '../../Animations/Reveal'
const Newsletter = ({isDarkModeClicked}) => {
  return (
    <>
        <div className={`mx-14 mt-10 numbusBol mb-10 
            ${isDarkModeClicked ? 'text-white' : 'text-black'}
            `}>
        <h1 className='text-6xl mb-10 max-sm:text-3xl '>SUBSCRIBE TO NEWSLETTER</h1>
        <div className='grid sm:grid-cols-2  max-w-[1920px] max-h-[600px]  gap-6 '>
            <div className='max-h-[600px]'>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
                <img  className='w-full h-full  object-cover object-bottom'  src={Shoe} alt="" />
                </Reveal>
            </div>
            <div className='flex flex-col max-sm:flex-col-reverse max-sm:gap-10 justify-between max-h-[600px]  '>
            <div className='flex flex-col gap-4 '>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
                <img className={`w-full max-h-[400px] object-cover object-right sm:h-[550px]`}   src={Crowd} alt="" />
            </Reveal>
            </div>
            <div className='flex flex-col justify-between gap-4 '>
                <h1 className='text-3xl'>SUBSCRIBE</h1>
                <p className='text-gray-400 font-extralight font-mono'>STAY AHEAD WITH CALIBRE. JOIN OUR NEWSLETTER FOR EXCULUSIVE UPDATES ON NEW ARRIVALS AND SPEACIAL OFFER</p>
                <div className='flex items-center gap-2'>
            <input className={`border-[3px]  border-stone-500 placeholder-stone-500 px-2
                 ${isDarkModeClicked ? 'bg-black' : 'bg-white '}
                `} type="mail" placeholder='TYPE YOUR EMAIL' />
                <button className='border-[3px] w-7 h-7 border-stone-500 '><i className="fa-solid fa-check"></i></button>
                </div>
            </div>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default Newsletter
