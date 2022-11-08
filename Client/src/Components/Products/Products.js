import React, { useState } from 'react'
import "../../css/Products/Products.css"
import ProductModal from './ProductModal';
import Bounce from 'react-reveal'

 function Products(props) {
  const [product, setproduct] = useState(""); 

  const openModal = (product) => {
    setproduct(product)
}

const closeModal = (product) => {
  setproduct(false)
}

  return (
    <Bounce left cascade>
      <div className="products-wrapper">{props.products.map(product => (
         
          <div className="product-item" key={product.id}>
            <a href='=#' onClick={() => openModal(product)}>
            <img src={product.imageurl} alt={product.title} />
            </a>
            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() => props.AddToCart(product)}> Add To Cart </button>
          </div>
      ))}

      <ProductModal product={product} closeModal={closeModal}/>
      </div>

      </Bounce>

   
  )
}


export default Products