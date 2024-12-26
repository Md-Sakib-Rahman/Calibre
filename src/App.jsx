import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Store from './Components/Store/Store.jsx'
import ProdDetail from './Components/Store/ProdDetailPage/ProdDetail.jsx'
import Cart from './Components/Cart/Cart.jsx'
import About from './Components/About/About.jsx'

import {useState, useEffect} from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = ({ isDarkModeClicked, setDarkModeClicked }) => {
  return (
    <>
      <Navbar isDarkModeClicked={isDarkModeClicked} setDarkModeClicked={setDarkModeClicked} />
      <Outlet /> 
    </>
  );
};
function App() {
  let [isDarkModeClicked, setDarkModeClicked] = useState(() => {
    const savedValue = localStorage.getItem('isDarkModeClicked');
    return savedValue === 'true'; 
  });
  const [cartState, setCartState] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)
  const addToCart = (product) => {
    setCartState((prevCart) => [...prevCart, product]); // Append product to the cart
    setTotalPrice((prev) => parseFloat((prev + product.productPrice).toFixed(2))); // Add product price and fix to 2 decimals
  };
  
  const removeFromCart = (index) => {
    setCartState((prevCart) => {
      const productToRemove = prevCart[index]; // Identify the product being removed
      let temp = parseFloat((totalPrice - productToRemove.productPrice).toFixed(2));
      setTotalPrice(temp); // Deduct product price and fix to 2 decimals
      return prevCart.filter((_, i) => i !== index); // Return the updated cart
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isDarkModeClicked={isDarkModeClicked} setDarkModeClicked={setDarkModeClicked} />,
      children: [
        {
          path: "/",
          element: <Home isDarkModeClicked={isDarkModeClicked} />,
        },
        {
          path: "/store",
          element: <Store isDarkModeClicked={isDarkModeClicked} addToCart={addToCart} />,
        },
        {
          path: "/proddetails",
          element: <ProdDetail isDarkModeClicked={isDarkModeClicked} addToCart={addToCart} />,
        },
        {
          path: "/cart",
          element: <Cart totalPrice={totalPrice} isDarkModeClicked={isDarkModeClicked} cartState={cartState} removeFromCart={removeFromCart} />,
        },
        {
          path: "/about",
          element: <About  isDarkModeClicked={isDarkModeClicked}  />,
        },
      ],
    },
  ]);
  const MainRoot= document.getElementById('root')
  const MainBody = MainRoot.parentElement;
  console.log(MainRoot)
  useEffect(()=>{
    localStorage.setItem('isDarkModeClicked', isDarkModeClicked);
    if(isDarkModeClicked){
      MainBody.style["background-color"] = "black"
    }else{
      MainBody.style["background-color"] = "white"
    }
  }, [isDarkModeClicked])
  return (
    <>
     
     <RouterProvider router={router} />
    </>
  )
}

export default App
