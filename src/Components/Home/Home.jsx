import {React, useRef} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion';
import Reveal from '../Animations/Reveal';

import Gawon from '../../assets/images/Gawon.png';
import Tshirt from '../../assets/images/Tshirt.png';
import Mascara from '../../assets/images/mascara.png';
import Lightbanner from '../../assets/images/light-mode-calibre.png';
import Darkbanner from '../../assets/images/dark-mode-calibre.png';
import model1 from '../../assets/images/models/1.png';
import model2 from '../../assets/images/models/2.png';
import model3 from '../../assets/images/models/3.png';
import Newsletter from './Newsletter/Newsletter';

const Home = ({isDarkModeClicked}) => {
  return (
    <>
    <div className='grid grid-cols-3 mx-14 h-[320px] gap-6 max-md:hidden mt-20'>
      <div className='mx-auto  items-start flex flex-col justify-between w-full '>
        <motion.div 
        variants={{
            hidden: {opacity:0 },
            visible: {opacity:1 }
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.5, delay: 0.3}}
        >
        <div className='relative'>
        <img className={` grayscale hover:grayscale-0 w-[400px] h-[250px] object-cover   hover:h-[290px] transition-all duration-300 ease-in-out 
        ${isDarkModeClicked ? 'bg-gray-400': 'bg-gray-700'}    
        hover:bg-transparent`} src={Tshirt} alt="" />
        <motion.div
        
        variants={{
            hidden: {left:0},
            visible: {left:"100%"}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay:0.3}}
        style={{
            position:'absolute',
            top:4,
            bottom:4,
            left: 0,
            right:0,
            background:`${isDarkModeClicked ? 'white': 'black'}`,
            zIndex:50
        }}
        />
        </div>
        
        
        </motion.div>
        <motion.div 
        variants={{
            hidden: {opacity:0 },
            visible: {opacity:1 }
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.5, delay: 0.3}}
        >
       <div className='relative'>
       <p className={` font-medium numbusBol text-xl 
        ${isDarkModeClicked ? 'text-gray-200': 'text-gray-800'}
        `}>EMBRACE BOLD ELEGANCS WITH CALIBRE
        
        </p>
       <motion.div
        
        variants={{
            hidden: {left:0},
            visible: {left:"100%"}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay:0.3}}
        style={{
            position:'absolute',
            top:4,
            bottom:4,
            left: 0,
            right:0,
            background:`${isDarkModeClicked ? 'white': 'black'}`,
            zIndex:50
        }}
        />
        </div>     
      
        </motion.div>
      </div>
      <div className='mx-auto justify-center items-center w-full'>
      <motion.div 
        variants={{
            hidden: {opacity:0 },
            visible: {opacity:1 }
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.5, delay: 0.3}}
        >
        <div className='relative'>
        <img className={`mx-auto grayscale hover:grayscale-0 w-[600px] h-[300px] object-cover hover:w-[320px] transition-all duration-300 ease-in-out  
         ${isDarkModeClicked ? 'bg-gray-400': 'bg-gray-700'}    
        hover:bg-transparent`} src={Gawon} alt="" />
        <motion.div
        
        variants={{
            hidden: {left:0},
            visible: {left:"100%"}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay:0.3}}
        style={{
            position:'absolute',
            top:4,
            bottom:4,
            left: 0,
            right:0,
            background:`${isDarkModeClicked ? 'white': 'black'}`,
            zIndex:50
        }}
        />
        </div>
        </motion.div>
      </div>
      <div className='flex flex-col-reverse justify-start items-end  w-full'>
      <motion.div 
        variants={{
            hidden: {opacity:0 },
            visible: {opacity:1 }
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.5, delay: 0.3}}
        >
        <div className='relative'>
        <img className={`grayscale hover:grayscale-0 w-[430px] h-[250px] object-cover  hover:h-[290px] transition-all duration-300 ease-in-out 
        ${isDarkModeClicked ? 'bg-gray-400': 'bg-gray-700'} 
        hover:bg-transparent`} src={Mascara} alt="" />
        <motion.div
        
        variants={{
            hidden: {left:0},
            visible: {left:"100%"}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay:0.3}}
        style={{
            position:'absolute',
            top:4,
            bottom:4,
            left: 0,
            right:0,
            background:`${isDarkModeClicked ? 'white': 'black'}`,
            zIndex:50
        }}
        />
        </div>
        </motion.div>
      </div>
      
    </div>
    <div className='max-md:my-96 mt-14 numbusBol text-center'>
        <div>
        <motion.div
        variants={{
            hidden: {opacity: 0, y:"100%"},
            visible: {opacity: 1, y:0}
        }}
         initial='hidden'
         animate='visible'
         transition={{
            duration:0.5,
            delay:0.2
         }}
        >
        {
            isDarkModeClicked ? <img src={Darkbanner} alt="" />: <img src={Lightbanner} alt="" />
        }
        </motion.div>
        </div>
        <h1 className={`mt-20 
            ${
                isDarkModeClicked ? 'text-white': 'text-black'
            }`}>see more <i className="fa-solid fa-chevron-down"></i></h1>
    </div>
    <div className={`mt-14 numbusBol mx-14 h-[80vh] max-xl:h-[70vh] max-md:h-[60vh] max-sm:h-full bg-cover max-sm:bg-repeat max-sm:bg-contain new-arrivals-bg 
        ${isDarkModeClicked? 'text-white' : 'text-black'}`}>
        <div className='flex justify-between max-sm:flex-col '>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
            <h1 className=' text-6xl max-sm:text-3xl'>NEW ARRIVALS</h1>
            </Reveal>
            <h2>SEE ALL <i className="fa-solid fa-chevron-right"></i></h2>
        </div>
        <div className={` grid grid-cols-3  max-sm:grid-cols-1 max-sm:gap-20 gap-6 py-10 max-auto justify-center items-center
            ${isDarkModeClicked? 'text-white' : 'text-black'}
            `}>
            <div className='lg:max-w-[400px] mx-auto h-[80vh] max-md:h-[60vh] max-xl:h-[70vh]  '>
            <div>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
                <img className='bg-zinc-200/85 xl:max-w-[400px] aspect-square max-sm:w-[400px]'  src={model1} alt="" />
            </Reveal>
            </div>
                <div className='mt-4 flex flex-col gap-6 max-sm:text-xl'>
                    <h2>90.80 $</h2>
                    <h2>BLACK SWEAT TSHIRT</h2>
                </div>
            </div>
            <div className='lg:max-w-[400px] mx-auto h-[80vh] max-md:h-[60vh] max-xl:h-[70vh] '>
            <div>
            <Reveal isDarkModeClicked={isDarkModeClicked}>
                <img className='bg-zinc-200/85 xl:max-w-[400px] aspect-square max-sm:w-[400px]'  src={model2} alt="" />
            </Reveal>
            </div>    
                <div className='mt-4 flex flex-col gap-6 max-sm:text-xl'>
                    <h2>60.80 $</h2>
                    <h2>BLACK LONG JACKET</h2>
                </div>
            </div>
            <div className='lg:max-w-[400px] mx-auto h-[80vh] max-md:h-[60vh] max-xl:h-[70vh] '>
           <div>
           <Reveal isDarkModeClicked={isDarkModeClicked}>
                <img className='bg-zinc-200/85 xl:max-w-[400px] aspect-square  max-sm:w-[400px]' src={model3} alt="" />
            </Reveal> 
            </div>   
                <div className='mt-4 flex flex-col gap-6 max-sm:text-xl'>
                    <h2>100.80 $</h2>
                    <h2>BLACK JACKETS WITH BLACK JEANS</h2>
                </div>
            </div>
        </div>
    </div>
    <Newsletter isDarkModeClicked={isDarkModeClicked}/>
    </>
    
    
  )
}

export default Home
