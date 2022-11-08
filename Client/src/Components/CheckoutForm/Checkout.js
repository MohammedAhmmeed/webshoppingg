import React from 'react'
import '../../css/CheckoutForm/Checkout.css'
import Input from '../Input/input'


 function Checkout (props) {
  return (
    <>
    {props.showform &&  <div className='checkout-form'>
                            <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
                            <form onSubmit={props.submitOrder}>
                                <Input
                                    label='name'
                                    type="text"
                                    onChange={props.handleChange}
                                    name="name"
                                />
                                <Input
                                    label='email'
                                    type="email"
                                    onChange={props.handleChange}
                                    name="email"
                                />
                                <div>
                                    <button type='submit'>Checkout</button>
                                </div>

                            </form>
                        </div>}
    </>
  )
}
export default Checkout