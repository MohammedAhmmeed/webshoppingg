
import {combineReducers} from 'redux'
import { cartreducers } from './cartreducers'
import { productreducer } from './productreducers'


export default combineReducers({
    products: productreducer,
    cart: cartreducers
})