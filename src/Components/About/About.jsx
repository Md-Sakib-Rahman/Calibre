import React from 'react'
import Reveal from '../Animations/Reveal'
import Lightbanner from '../../assets/images/light-mode-calibre.png';
import Darkbanner from '../../assets/images/dark-mode-calibre.png';
const About = ({isDarkModeClicked}) => {
  return (
   <>
   
     <div className='mt-20'>
        <Reveal isDarkModeClicked={isDarkModeClicked}>
        <div className='flex relative justify-center items-center gap-20 w-full mx-auto  bg-about-bg   bg-no-repeat bg-center bg-cover h-[80vh]'>
            <div className='bg-black/50 absolute top-0 h-full z-10 w-full'>

            </div>
            <div className='z-20'>
                <h1 className=' text-white text-center text-6xl PlacardNextBold tracking-wider'>CONTACT US</h1>
            </div>
            
        </div>
        </Reveal>
        <div className='flex flex-col mx-auto w-[90%] max-w-[820px] my-16 gap-4 numbusBol placeholder:PlacardNextBold tracking-widest'>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
            <h1 className={`text-3xl ${isDarkModeClicked ? 'text-white' : 'text-black'} PlacardNextBold`}>SEND US A MAIL:</h1>
            </Reveal>
            <div className='w-full flex gap-4'>
                <input className={` ${isDarkModeClicked ? 'border-white' : 'border-black'}  border-2 w-[50%] h-10 px-2 outline-stone-500`} placeholder='FIRST NAME' type="text" />
                <input className='border-black border-2 w-[50%] h-10 px-2 outline-stone-500' placeholder='SECOND NAME' type="text" />
            </div>
            <div className='w-full'>
                <input className='border-black border-2 w-full h-10 px-2 outline-stone-500' placeholder='YOUR EMAIL' type="text" />
            </div>
            <div className='w-full'>
                {/* <input className='border-black border-2 w-full px-2 outline-stone-500 h-[80px]' type="textarea" /> */}
                <textarea
                className="border-black border-2 w-full px-2 outline-stone-500 h-[80px]"
                rows="3"
                placeholder='YOUR MESSAGE'
                ></textarea>
            </div>
        </div>
        <hr className={`my-16 mx-auto ${isDarkModeClicked ? 'border-white' : 'border-black'}  w-[80%] `}/>
        <div className='mx-auto w-[90%] max-w-[820px]'>

        <Reveal isDarkModeClicked={isDarkModeClicked}>
            <h1 className={`text-3xl ${isDarkModeClicked ? 'text-white' : 'text-black'} PlacardNextBold`}>FIND US HERE:</h1>
            </Reveal>
            <div className={`flex justify-between items-center
                ${isDarkModeClicked ? 'text-white' : 'text-black'}
                text-black text-4xl my-12 h-[10vh]`}>
                <div className='w-[30%] text-center'>
                <Reveal isDarkModeClicked={isDarkModeClicked}>
                <i className="fa-brands fa-facebook hover:text-6xl transition-all ease-in-out mx-auto "></i>
                </Reveal>
                </div>
                <div className='w-[30%] text-center'>
                <Reveal isDarkModeClicked={isDarkModeClicked}>
                <i className="fa-solid fa-envelope hover:text-6xl transition-all ease-in-out mx-auto"></i>   
                </Reveal>
                </div>
                <div className='w-[30%] text-center'>
                <Reveal isDarkModeClicked={isDarkModeClicked}>    
                <i class="fa-brands fa-x-twitter hover:text-6xl transition-all ease-in-out mx-auto"></i>  
                </Reveal>  
                </div>
            </div>
        </div>
        <Reveal isDarkModeClicked={isDarkModeClicked}> 
        {
                    isDarkModeClicked ? <img src={Darkbanner} alt="" />: <img src={Lightbanner} alt="" />
        }
        </Reveal>
     </div>
   
   </>
  )
}

export default About
