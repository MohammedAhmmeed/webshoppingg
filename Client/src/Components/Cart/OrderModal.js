import React from 'react'
import Modal from 'react-modal'

 function OrderModal(props) {
  const {order, colseModal, cartItems} = props

  return (
    <Modal isOpen={order} onRequestClose={colseModal}>
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
                <td>{cartItems.reduce((a, p) => {
                    return a+ p.price * p.qty
                }, 0)}</td>

            </tr>
            <tr>
                <td>
                Selected Items:
                </td>
                <td>{cartItems.map (p => (
                    <div className='cartdata'> 
                        <p>Number of this Products: {p.qty}</p>
                        <p>Title of Products: {p.title}</p>

                    </div>
                ))}</td>
            </tr>
        </table>
    </div>
</Modal>


  )
}
export default OrderModal