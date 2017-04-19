import { Constants } from '../Constants'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'


export class AuthActions {

    //LoggedIn
    static hasLoggedIn(email) {
        const action = {
            type: Constants.HAS_SIGNED_IN,
            email
        }
        return action;
    }


    //SignIn
    static userSignIn() {
        return {
            type: Constants.SIGN_IN,

        }
    }

    static userSignInSuccess(authUserData) {
        return {
            type: Constants.SIGN_IN_SUCCESS,
            authUserData
        }

    }

    static userSignInFailed(error) {
        return {
            type: Constants.SIGN_IN_FAILED,
            error
        }

    }

    static userLogOut() {
        return  {
            type: Constants.LOGOUT
        }
    }

    static userLogOutSuccess() {
        const action = {
            type: Constants.LOG_OUT_SUCCESS
        }
        return action;
    }

}

export class ProductActions{

static addProduct() {
        return {
            type: Constants.ADD_PRODUCT
        }
    }


    static addProductSuccess(addProductData) {
        return {
            type: Constants.ADD_PRODUCT_SUCCESS,
            addProductData
        }
    }


    static addProductFailed(error) {
        return {
            type: Constants.ADD_PRODUCT_FAILED,
            error
        }
    }

    static viewProduct() {
        return {
            type: Constants.VIEW_PRODUCT
        }
    }


    static viewProductSuccess(viewProductData, productObject) {
        return {
            type: Constants.VIEW_PRODUCT_SUCCESS,
            viewProductData,
            productObject
        }
    }


    static viewProductFailed(error) {
        return {
            type: Constants.VIEW_PRODUCT_FAILED,
            error
        }
    }
}

export class StoreActions{

static addStore() {
        return {
            type: Constants.ADD_STORE
        }
    }


    static addStoreSuccess(addStoreData) {
        return {
            type: Constants.ADD_STORE_SUCCESS,
            addStoreData
        }
    }


    static addStoreFailed(error) {
        return {
            type: Constants.ADD_STORE_FAILED,
            error
        }
    }

    static viewStore() {
        return {
            type: Constants.VIEW_STORE
        }
    }


    static viewStoreSuccess(viewStoreData) {
        return {
            type: Constants.VIEW_STORE_SUCCESS,
            viewStoreData
        }
    }


    static viewStoreFailed(error) {
        return {
            type: Constants.VIEW_STORE_FAILED,
            error
        }
    }
}

export class PurchaseActions{

static addPurchase() {
        return {
            type: Constants.ADD_PURCHASE
        }
    }


    static addPurchaseSuccess(addPurchaseData) {
        return {
            type: Constants.ADD_PURCHASE_SUCCESS,
            addPurchaseData
        }
    }


    static addPurchaseFailed(error) {
        return {
            type: Constants.ADD_PURCHASE_FAILED,
            error
        }
    }

    static viewPurchase() {
        return {
            type: Constants.VIEW_PURCHASE
        }
    }


    static viewPurchaseSuccess(viewPurchaseData) {
        return {
            type: Constants.VIEW_PURCHASE_SUCCESS,
            viewPurchaseData
        }
    }


    static viewPurchaseFailed(error) {
        return {
            type: Constants.VIEW_PURCHASE_FAILED,
            error
        }
    }
}

export class SaleActions{

static addSale() {
        return {
            type: Constants.ADD_SALE
        }
    }


    static addSaleSuccess(addSaleData) {
        return {
            type: Constants.ADD_SALE_SUCCESS,
            addSaleData
        }
    }


    static addSaleFailed(error) {
        return {
            type: Constants.ADD_SALE_FAILED,
            error
        }
    }

    static viewSale() {
        return {
            type: Constants.VIEW_SALE
        }
    }


    static viewSaleSuccess(viewSaleData) {
        return {
            type: Constants.VIEW_SALE_SUCCESS,
            viewSaleData
        }
    }


    static viewSaleFailed(error) {
        return {
            type: Constants.VIEW_SALE_FAILED,
            error
        }
    }
}

export class StockActions{

    static viewStock() {
        return {
            type: Constants.VIEW_STOCK
        }
    }


    static viewStockSuccess(viewStockData) {
        return {
            type: Constants.VIEW_STOCK_SUCCESS,
            viewStockData
        }
    }


    static viewStockFailed(error) {
        return {
            type: Constants.VIEW_STOCK_FAILED,
            error
        }
    }

}