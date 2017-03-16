import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from '../Reducers/AuthReducer'
import ProductReducer from '../Reducers/ProductReducer'
import StoreReducer from '../Reducers/StoreReducer'

export const rootReducer = createStore(combineReducers({
        AuthReducer,
        ProductReducer,
        StoreReducer
           })
           )

export let store = rootReducer;