import React , {useState} from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Headar from "./Components/headar/Headar";
import Products from "./Components/Products/Products";
import data from "./data.json"
import './index.css'


function App() {

  const [products, setProducts ] = useState(data)
  return (
    <div className="layout">

<Headar /> 
 <main>
  <div className="wrapper" >
  <Products className="product" products={products}/>
   <Filter className="filer" />
  </div>
 </main>
<Footer />

    </div>
  );
}

export default App;
