import React , {useState} from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Headar from "./Components/headar/Headar";
import Products from "./Components/Products/Products";
import data from "./data.json"
import './index.css'


function App() {

  const [products, setProducts ] = useState(data)
  const [sort , setSort] = useState("");
  const [size , setSize] = useState("");

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a,b) {

      if(order == "lower") {
        return a.price - b.price
      }
      else if (order == "highest") {
        return b.price - a.price4
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
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts);
      }

  }
  return (
    <div className="layout">

<Headar /> 
 <main>
  <div className="wrapper" >
  <Products products={products}/>
   <Filter 
   handleFilterBySize={handleFilterBySize} 
   size={size}
   handleFilterByOrder={handleFilterByOrder}
   sort={sort}
   />
  </div>
 </main>
<Footer />

    </div>
  );
}

export default App;
