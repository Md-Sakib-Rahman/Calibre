import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isDarkModeClicked, setDarkModeClicked}) => {
    let [isNavclicked, setNavClicked] = useState(false)
    
   
    function burgerMenu(){
        setNavClicked((prev)=>!prev)
        
    }
    function modeClick(){
        setDarkModeClicked((prev)=>!prev)
    }
    
  return (
    <>
        <div className={`flex justify-between items-center  py-4 numbusBol font-bold fixed w-full top-0 z-50 
            ${
                isDarkModeClicked ? 'text-white bg-black' : 'text-black bg-white'
            }
            text-md sm:hidden `} >
            <div  className='w-full mx-14 flex justify-between items-center'>
               <Link to='/'> <h1 className='PlacardNextBold text-2xl'>CALIBRE</h1></Link>
                <div className='flex justify-between items-center gap-10'>
                <Link to='/cart'><h2>Cart</h2></Link>
                
                <button onClick={burgerMenu}><i className="fa-solid fa-bars text-xl"></i></button>
                </div>
            </div>
            <div className={`flex-col justify-between items-center fixed top-14  w-[50%] backdrop-blur-lg  overflow-hidden shadow-lg transition-all duration-300 ease-in-out 
            ${
                isDarkModeClicked ? ' bg-black' : ' bg-white'
            }
            ${
                isNavclicked ? 'left-0' : '-left-[100%]'
            } h-full min-w-[250px]`}>
                <Link to='/store'>
                <div className={`py-4  
                    ${
                        isDarkModeClicked ? 'hover:bg-white hover:text-black ' : 'hover:bg-black hover:text-white '
                    }
                    w-full pl-10 flex justify-start items-center gap-4`}>
                <i className="fa-solid fa-tag text-xl"></i><h2>Store</h2>
                </div>
                </Link>
                <Link to='/about'>
                <div className={`py-4  
                    ${
                        isDarkModeClicked ? 'hover:bg-white hover:text-black ' : 'hover:bg-black hover:text-white '
                    }
                    w-full pl-10 flex justify-start items-center gap-4`}>
                <i className="fa-solid fa-circle-info text-xl"></i><h2>About</h2>
                </div>
                </Link>
                {/* <div className={`py-4  
                    ${
                        isDarkModeClicked ? 'hover:bg-white hover:text-black ' : 'hover:bg-black hover:text-white '
                    }
                    w-full pl-10 flex justify-start items-center gap-4`}>
                <i className="fa-solid fa-magnifying-glass text-xl"></i><h2>Search</h2>
                </div> */}
                <div onClick={modeClick} className={`py-4  
                    ${
                        isDarkModeClicked ? 'hover:bg-white hover:text-black ' : 'hover:bg-black hover:text-white '
                    }
                    w-full pl-10 flex justify-start items-center gap-4`}>
                <button  className='flex justify-start items-center gap-4 '>
                    {isDarkModeClicked ? <i className="fa-regular fa-lightbulb text-xl"></i> : <i className="fa-solid fa-lightbulb text-xl"></i>}
                    <h2>Mode</h2>
                </button>
                </div>
                
            </div>
            
        </div>
        <div className={`flex justify-between items-center px-14 py-4 numbusReg font-bold fixed w-full top-0 z-50
            ${
                isDarkModeClicked ? 'text-white bg-black' : 'text-black bg-white'
            }
            md:text-xl md:text-md max-sm:hidden`} >
            <div className='flex justify-between items-center md:gap-14 sm:gap-10 max-w-[200px]'>
                <Link to="/store">
                <div>
                    <h2>Store</h2>
                </div>
                </Link>
                <Link to='/about'>
                <div>
                    <h2>About</h2>
                </div>
                </Link>
            </div>
            <div >
                <Link to='/'><h1 className='PlacardNextBold md:text-3xl sm:text-xl'>CALIBRE</h1></Link> 
            </div>
            <div className='flex justify-between items-center md:gap-14 sm:gap-10 max-w-[200px]'>
                {/* <div>
                    <h2>Search</h2>
                </div> */}
                <div>
                    <Link to='/cart'>
                    <h2>Cart</h2>
                    </Link>
                </div>
                <div><button onClick={modeClick}>
                    {isDarkModeClicked ? <i className="fa-regular fa-lightbulb text-xl"></i> : <i className="fa-solid fa-lightbulb text-xl"></i>}
                    
                    </button></div>
            </div>
        </div>
    </>
  )
}

export default Navbar
