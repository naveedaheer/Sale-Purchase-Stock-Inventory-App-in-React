import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { authReducer, productReducer, storeReducer, purchaseReducer, saleReducer, stockReducer } from "./Reducers/reducer"

const rootReducer = combineReducers({
    authReducer,
    productReducer,
    storeReducer,
    purchaseReducer,
    saleReducer,
    stockReducer
})
const logger = createLogger();

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;