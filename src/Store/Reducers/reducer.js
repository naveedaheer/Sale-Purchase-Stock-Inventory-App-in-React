import { firebaseApp, ref } from '../../Database/firebaseApp'
import { Constants } from '../Constants'

export var authReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    user: {},
}, action) => {

    switch (action.type) {

        case Constants.HAS_SIGNED_IN:
            const { email } = action;
            return email

        case Constants.SIGN_IN:
            return Object.assign({}, state)

        case Constants.SIGN_IN_SUCCESS:
            return Object.assign({}, state, { user: action.authUserData })

        case Constants.SIGN_IN_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        case Constants.LOG_OUT:
            return Object.assign({}, state, { user: action.data })

        case Constants.LOGOUT:
            return Object.assign({}, state)

        default:
            return state
    }
}

export var productReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    products: []
}, action) => {
    switch (action.type) {

        case Constants.ADD_PRODUCT:
            return Object.assign({}, state)

        case Constants.ADD_PRODUCT_SUCCESS:
            return Object.assign({}, state, { addedProducts: action.addProductData })

        case Constants.ADD_PRODUCT_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

            case Constants.VIEW_PRODUCT:
            return Object.assign({}, state)

        case Constants.VIEW_PRODUCT_SUCCESS:
            return Object.assign({}, state, { products: action.viewProductData })

        case Constants.VIEW_PRODUCT_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        default:
            return state
    }
}

export var storeReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    stores: []
}, action) => {
    switch (action.type) {

        case Constants.ADD_STORE:
            return Object.assign({}, state)

        case Constants.ADD_STORE_SUCCESS:
            return Object.assign({}, state, { addedStores: action.addStoreData })

        case Constants.ADD_STORE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

            case Constants.VIEW_STORE:
            return Object.assign({}, state)

        case Constants.VIEW_STORE_SUCCESS:
            return Object.assign({}, state, { stores: action.viewStoreData })

        case Constants.VIEW_STORE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        default:
            return state
    }
}


export var purchaseReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    purchases: [],
    open:false,
}, action) => {

    switch (action.type) {

        case Constants.ADD_PURCHASE:
            return Object.assign({}, state)

        case Constants.ADD_PURCHASE_SUCCESS:
            return Object.assign({}, state, { addedPurchases: action.addPurchaseData, open:true })

        case Constants.ADD_PURCHASE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

            case Constants.VIEW_PURCHASE:
            return Object.assign({}, state)

        case Constants.VIEW_PURCHASE_SUCCESS:
            return Object.assign({}, state, { purchases: action.viewPurchaseData })

        case Constants.VIEW_PURCHASE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        default:
            return state
    }
}

export var saleReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    sales: [],
    open:false,
}, action) => {
    switch (action.type) {
            
        case Constants.ADD_SALE:
            return Object.assign({}, state)

        case Constants.ADD_SALE_SUCCESS:
            return Object.assign({}, state, { addedSales: action.addSaleData, open: true })

        case Constants.ADD_SALE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

            case Constants.VIEW_SALE:
            return Object.assign({}, state)

        case Constants.VIEW_SALE_SUCCESS:
            return Object.assign({}, state, { sales: action.viewSaleData })

        case Constants.VIEW_SALE_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        default:
            return state
    }
}


export var stockReducer = (state = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    stock: []
}, action) => {

    switch (action.type) {

        case Constants.VIEW_STOCK:
            return Object.assign({}, state)

        case Constants.VIEW_STOCK_SUCCESS:
            return Object.assign({}, state, { stock: action.viewStockData })

        case Constants.VIEW_STOCK_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        default:
            return state
    }
}