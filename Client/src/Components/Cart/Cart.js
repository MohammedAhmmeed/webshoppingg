import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../CheckoutForm/Checkout';
import Bounce from 'react-reveal'

 function Cart(props) {

    const [ showform , setShowForm ] = useState(false);
    const [ value , setvalue ] = useState("");


    const submitOrder = (e) => {
        e.preventDefault();
        
        const order = {
            name : value.name,
            email : value.email
        }

        console.log(order);

    }

    const handleChange = (e) => {

        setvalue( (prevState) => ({ ...prevState, [e.target.name]: e.target.value}))
    }

  return (
    <div className='cart-wrapper'>
`                <div className='cart-title'> {props.cartitems.length === 0 ? 'Cart Empty' : <p>There is {props.cartitems.length} Product in Cart</p>} </div>
                <Bounce bottom cascade>
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
                </Bounce>
`
                     {
                        props.cartitems.length !== 0 && 
                        (   
                        <div  className='cartfooter'>
                            <div className='total' >Total Price : ${props.cartitems.reduce ((acc, p) => {
                            return acc + p.price * p.qty
                            } , 0)}</div>
                            <button onClick={() => setShowForm(true)}>Select Product</button>
                        </div>)
                     }
                     {/* Checkout Form*/}
                       <Checkout 
                       showform={showform} 
                       setShowForm={setShowForm} 
                       handleChange={handleChange}  
                       submitOrder={submitOrder}/>
    </div>
  )
}
export default Cart