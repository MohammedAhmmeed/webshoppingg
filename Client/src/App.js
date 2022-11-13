import React , {useEffect, useState} from "react";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Headar from "./Components/headar/Headar";
import Products from "./Components/Products/Products";
import {Provider} from 'react-redux'
import store from "./store/store";
import data from "./data.json"
import './index.css'


function App() {

  const [products, setProducts ] = useState(data)
  const [sort , setSort] = useState("");
  const [size , setSize] = useState("");
  const [cartitems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [] );

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a,b) {

      if(order == "lower") {
        return a.price - b.price
      }
      else if (order == "highest") {
        return b.price - a.price
      }
      else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts)
} 


  const handleFilterBySize = (e) => {
      setSize(e.target.value);
      if(e.target.value  == "ALL"){
        setProducts(data);
      } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts);
      }

  }

  const AddToCart = (product) => {
    const cartItemsClone = [...cartitems];
    var isProductExist = false;
    cartItemsClone.forEach(p => {
      if(p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    })
    if(!isProductExist) {
      cartItemsClone.push({...product, qty: 1})
    }
    setCartItems(cartItemsClone);
    console.log(cartitems);
  }

useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartitems))
} , [cartitems] )

  const RemoveCart = (product) => {
    const cartItemsClone = [...cartitems];
    setCartItems(cartItemsClone.filter(p => p.id != product.id))
  }
  return (
    <Provider store={store}>
      <div className="layout">

<Headar /> 
 <main>
  <div className="wrapper" >
  <Products  AddToCart={AddToCart}/>
   <Filter 
   ProductNumber={products.length}
   handleFilterBySize={handleFilterBySize} 
   size={size}
   handleFilterByOrder={handleFilterByOrder}
   sort={sort}
   />
   
  </div>
  <Cart cartitems={cartitems}
  RemoveCart={RemoveCart} />
 </main>
<Footer />

    </div>
    </Provider>
  );
}

export default App;
