import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../CheckoutForm/Checkout';
import Bounce from 'react-reveal'
import Model from 'react-modal'
import {connect} from 'react-redux'
import { removecart } from '../../store/actions/cart';

 function Cart(props) {

    const [ showform , setShowForm ] = useState(false);
    const [order , setOrder]  = useState(false);
    const [ value , setvalue ] = useState("");


    const submitOrder = (e) => {
        e.preventDefault();
        
        const order = {
            name : value.name,
            email : value.email
        }

        setOrder(order);
    }

    const colseModal = () => {
        setOrder(false);
    }

    const handleChange = (e) => {

        setvalue( (prevState) => ({ ...prevState, [e.target.name]: e.target.value}))
    }

  return (
    <div className='cart-wrapper'>
`                <div className='cart-title'> {props.cartItems.length === 0 ? 'Cart Empty' : <p>There is {props.cartItems.length} Product in Cart</p>} </div>
                
                <Model isOpen={order} onRequestClose={colseModal}>
                    <div className='order-info'>
                        <span className='close-icon' onClick={colseModal}>&times;</span>
                        <p className='alert-success'>Order Done Successfully</p>
                        <table>
                            <tr>
                                <td>Name :</td>
                                <td>{order.name}</td>

                            </tr>
                            <tr>
                                <td>E-mail :</td>
                                <td>{order.email}</td>

                            </tr>
                            <tr>
                                <td>Total :</td>
                                <td>{props.cartItems.reduce((a, p) => {
                                    return a+ p.price * p.qty
                                }, 0)}</td>

                            </tr>
                            <tr>
                                <td>
                                Selected Items:
                                </td>
                                <td>{props.cartItems.map (p => (
                                    <div className='cartdata'> 
                                        <p>Number of this Products: {p.qty}</p>
                                        <p>Title of Products: {p.title}</p>

                                    </div>
                                ))}</td>
                            </tr>
                        </table>
                    </div>
                </Model>
                
                
                <Bounce bottom cascade>
                <div className='cart-items'> 
                    {props.cartItems.map(item => (
                    <div className='cart-item' key={item.id}>
                        <img src={item.imageurl} alt=""  /> 
                        <div className='cart-info'>
                            <div>
                                <p>Title: {item.title}</p>  
                                <p>Qty: {item.qty} </p>    
                                <p>Price: ${item.price}</p>      
                            </div>
                            <button onClick={() => props.removecart(item)}>
                                Remove
                            </button>    
                        </div>   
                    </div> 

                    ))}
                </div>
                </Bounce>
`
                     {
                        props.cartItems.length !== 0 && 
                        (   
                        <div  className='cartfooter'>
                            <div className='total' >Total Price : ${props.cartItems.reduce ((acc, p) => {
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
export default connect((state) => {
    return {
        cartItems: state.cart.cartItems

    }
},{removecart}) (Cart)