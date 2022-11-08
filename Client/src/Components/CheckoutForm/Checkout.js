import React from 'react'
import '../../css/CheckoutForm/Checkout.css'
import Zoom from 'react-reveal'
import Input from '../Input/input'



 function Checkout (props) {
  return (
    <Zoom left cascade>
    {props.showform &&  <div className='checkout-form'>
                            <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
                    
                            <form onSubmit={props.submitOrder}>
                                <Input
                                    label='Name'
                                    type="text"
                                    onChange={props.handleChange}
                                    name="name"
                                />
                                <Input
                                    label='E-mail'
                                    type="email"
                                    onChange={props.handleChange}
                                    name="email"
                                />
                                <div>
                                    <button type='submit'>Checkout</button>
                                </div>

                            </form>
                   
                        </div>}
    </Zoom>
  )
}
export default Checkout