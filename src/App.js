import React, { useState } from 'react';
import Nav  from './nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';


const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //product details
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter producter
   const [product, setProduct] = useState(Productdetail)
   const searchbtn = (product) =>
   {
     const change = Productdetail.filter((x) =>
    {
     return x.Cat === product
    })
      setProduct(change)
   }
   //product details 
  const view = (product) => 
   {
    setDetail([{...product}])
    setClose(true)
   }
     //add to card
     const addtocart = (product) => 
     {
      const exsit = cart.find((x) =>
       {
         return x.id === product.id
       })
       if(exsit)
       {
         alert("This Product is already added to cart")
       }
       else
       {
        setCart([...cart, {...product, qty:1}])
        alert("Product added to the cart")
       }
     }
     console.log(cart)
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;