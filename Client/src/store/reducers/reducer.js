
import {combineReducers} from 'redux'
import { productreducer } from './productreducers'


export default combineReducers({
    products: productreducer,
})