import React from 'react'
import '../../css/Cart/Cart.css'

 function Cart(props) {
  return (
    <div className='cart-wrapper'>
            <div className='cart-title'> {props.cartitems.length === 0 ? 'Cart Empty' : <p>There is {props.cartitems.length} Product in Cart</p>} </div>
            <div className='cart-items'> 
                {props.cartitems.map(item => (
                <div className='cart-item' key={item.id}>
                    <img src={item.imageurl} alt=""  /> 
                    <div className='cart-info'>
                        <div>
                            <p>Title: {item.title}</p>  
                            <p>Qty: {item.qty} </p>    
                            <p>Price: ${item.price}</p>      
                        </div>
                        <button onClick={() => props.RemoveCart(item)}>
                            Remove
                        </button>    
                    </div>   
                </div> 

                ))}
            </div>

    </div>
  )
}
export default Cart