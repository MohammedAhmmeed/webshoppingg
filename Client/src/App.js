import React , {useState} from "react";
import Footer from "./Components/Footer/Footer";
import Headar from "./Components/headar/Headar";
import Products from "./Components/Products/Products";
import data from "./data.json"


function App() {

  const [products, setProducts ] = useState(data)
  return (
    <div className="layout">

<Headar /> 
 <main>
  <div className="wrapper" >
<Products products={products}/>
    <div className="filter">Filter</div>
  </div>
 </main>
<Footer />

    </div>
  );
}

export default App;
