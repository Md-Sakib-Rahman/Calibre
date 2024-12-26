import React from 'react'

const Pagination = ({pageNumber, setCurrentPage, pagination ,currentPage, isDarkModeClicked}) => {
let isActive = currentPage===pageNumber
  return (
    <>
        <button onClick={()=> {
            setCurrentPage(pageNumber)
            pagination()
           
            console.log(pageNumber)
            }} className={` p-2 w-10 h-10  border-2
                ${isActive
                    ? isDarkModeClicked
                      ? 'bg-black text-white border-white'
                      : 'bg-white text-black border-black'
                    : isDarkModeClicked
                    ? 'bg-white text-black border-black'
                    : 'bg-black text-white border-white'} transition-all
            `}>{pageNumber}</button>
    </>
  )
}

export default Pagination
