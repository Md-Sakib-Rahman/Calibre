import React, { useEffect, useState } from 'react'
import CategoriesCard from './Categories/CategoriesCard'
import ShopCard from './ShopCard/ShopCard'
import Pagination from './Pagination/Pagination'
import Reveal from '../Animations/Reveal'
const Store = ({isDarkModeClicked, addToCart}) => {
    const [allProducts, setAllProduct]= useState([])
    const [filteredProducts, setFilteredProduct]= useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const prodPerPage=6
  
    const [pageButtons, setPageButtons] = useState([]);
    function pagination (){
        const firstIndex = (currentPage - 1) * prodPerPage;
        const lastIndex = currentPage * prodPerPage;
        return filteredProducts.slice(firstIndex, lastIndex);

    }
    function handleCategory(catName){

        console.log("handle cat is triggered ");
        console.log("allProducts before filtering: ", allProducts);

        let filter;
        if(catName==='All'){
            filter=allProducts.filter(
                prod=> prod.category === "beauty" || prod.category === "mens-shoes" ||  prod.category === "mens-watches" || prod.category === "womens-watches" || prod.category === "womens-shoes" || prod.category === "womens-dresses" || prod.category === "mens-shirts"
            )
        }else{
            if(catName==='Beauty Products') catName='beauty'
            else if(catName==="Men's Shoes") catName='mens-shoes'
            else if(catName==="Luxury Men's Watches") catName='mens-watches'
            else if(catName==="Exclusive Women's Dresses") catName='womens-dresses'
            else if(catName==="Exclusive Men's Tshirt") catName='mens-shirts'
            else if(catName==="Luxury Women's Watches") catName='womens-watches'
            else if(catName==="World Class Fragrances") catName='fragrances'
            else if(catName==="Women's Shoes") catName='womens-shoes'
            console.log(catName);
            
            filter=allProducts.filter(
                prod => prod.category === catName
            )
        }
        console.log("filtered product  before set : ", filteredProducts);
        console.log("filter  before set : ", filter);
        setFilteredProduct(filter)
        console.log("filtered product after set: ", filteredProducts);
        console.log("filter after set: ", filter);
        
    }
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=0&skip=0&select=id,title,description,category,images,reviews,rating,price')
        .then(res => res.json())

        .then(res => {
            const filtered =  res.products.filter(prod => prod.category === "beauty" || prod.category === "mens-shoes" ||  prod.category === "mens-watches" || prod.category === "womens-watches" || prod.category === "womens-shoes" || prod.category === "womens-dresses" || prod.category === "mens-shirts" ||prod.category === "fragrances")
            setAllProduct(filtered)
            setFilteredProduct(filtered)
        })
       
        
    },[])
    useEffect(() => {
        setTotalPage(Math.ceil(filteredProducts.length / prodPerPage));
        const buttons = [];
        for (let i = 1; i <= totalPage; i++) {
          buttons.push(<Pagination key={i} pageNumber={i} currentPage={currentPage} setCurrentPage={setCurrentPage} pagination={pagination} isDarkModeClicked={isDarkModeClicked} />);
        }
        setPageButtons(buttons);
      }, [filteredProducts, currentPage, totalPage]);
    return (
    
    <>
    
        <div className='mt-[80px] w-full'>
            <h1 className='text-center text-4xl numbusBol my-4'>Category</h1>
            <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-2 justify-center items-center mx-auto gap-10 max-sm:gap-4 max-sm:mx-2'>
            
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Exclusive Men's Tshirt" catImg="https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Men's Shoes" catImg="https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Luxury Men's Watches" catImg="https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Exclusive Women's Dresses" catImg="https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/4.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Women's Shoes" catImg="https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/1.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Luxury Women's Watches" catImg="https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="Beauty Products" catImg="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="World Class Fragrances" catImg="https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png" />
            <CategoriesCard handleCategory={handleCategory} isDarkModeClicked={isDarkModeClicked} catName="All" catImg="https://icon-library.com/images/reset-icon-png/reset-icon-png-10.jpg" />
            
            </div>
            
            
        </div>
         <div className='w-full'>
        <h1 className='text-center text-4xl numbusBol my-4'>Your Shop</h1>
            <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-2 justify-center items-center mx-auto gap-10 max-sm:gap-4 max-sm:mx-2 numbusBol '>
                {
                    
                    pagination().map((prod)=>{
                        return(
                        <ShopCard 
                            isDarkModeClicked={isDarkModeClicked}
                            key={prod.id}
                            productName={prod.title} 
                            productPrice={prod.price} 
                            productDesc={prod.description} 
                            productImg={prod.images[0]} 
                            productRating={prod.rating}
                            productReviews={prod.reviews}
                            addToCart={addToCart}
                        />
                    )
                    })
                }
                
               
            
            </div>    
        </div>  
        <div className='flex justify-center items-center gap-2 my-5'>
        {pageButtons}
        </div>
               
    </>
  )
}

export default Store
