import { AuthActions, ProductActions, StoreActions, PurchaseActions, SaleActions, StockActions } from './AllActions'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'

export function LoginUser(LogInData) {
    return (dispatch) => {
        dispatch(AuthActions.userSignIn());
        firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data) => {
                return firebaseApp.database().ref('/userInfo' + data.uid).once('value', snapshot => {
                    let userData = snapshot.val();
                    dispatch(AuthActions.userSignInSuccess(userData))
                    browserHistory.replace('/home')
                })
            })
            .catch((error) => {
                console.log("login error", error)
                dispatch(AuthActions.userSignInFailed(error))
            })
    }
}

export function AddNewProduct(AddNewProductData) {

    return (dispatch) => {
        dispatch(ProductActions.addProduct());
        firebaseApp.database().ref('products').push(AddNewProductData)
            .then((data) => {
                console.log("Product Added Successfully")
                dispatch(ProductActions.addProductSuccess(data));
                browserHistory.replace('/home/view-products');
            })
            .catch((error) => {
                console.log("Error in adding product", error)
                dispatch(ProductActions.addProductFailed(error))
            })
    }
}

export function ViewProducts() {
    return ((dispatch) => {
        dispatch(ProductActions.viewProduct());
        let ref = firebaseApp.database().ref().child('/products');
        ref.once('value', function (snapshot) {
            let productList = [];
            snapshot.forEach(childSnapshot => {
                var productObject = childSnapshot.val();
                productObject.key = childSnapshot.key;
                productList.push(productObject)
            })
            dispatch(ProductActions.viewProductSuccess(productList))
        })
            .catch((error) => {
                dispatch(ProductActions.viewProductFailed(error))
                console.log("error in getting Products", error)
            })
    })
}

export function AddNewStore(AddNewStoreData) {
    return (dispatch) => {
        dispatch(StoreActions.addStore());
        firebaseApp.database().ref('stores').push(AddNewStoreData)
            .then((data) => {
                console.log("Store Added Successfully")
                dispatch(StoreActions.addStoreSuccess(data));
                browserHistory.replace('/home/view-Stores');
            })
            .catch((error) => {
                console.log("Error in adding Store", error)
                dispatch(StoreActions.addStoreFailed(error))
            })
    }
}

export function ViewStores() {
    return (dispatch) => {
        dispatch(StoreActions.viewStore());
        let ref = firebaseApp.database().ref().child('/stores');
        ref.once('value', function (snapshot) {
            let storeList = [];
            snapshot.forEach(childSnapshot => {
                var storeObject = childSnapshot.val();
                storeObject.key = childSnapshot.key;
                storeList.push(storeObject)
            })
            dispatch(StoreActions.viewStoreSuccess(storeList))
        })
            .catch((error) => {
                dispatch(StoreActions.viewStoreFailed(error))
                console.log("error in getting Stores", error)
            })
    }
}

export function AddNewPurchase(AddNewPurchaseData) {
    return (dispatch) => {
        dispatch(PurchaseActions.addPurchase());
        firebaseApp.database().ref('/products').orderByKey().equalTo(AddNewPurchaseData.productId).once('value',snap=>{
            AddNewPurchaseData.productName = snap.val()[AddNewPurchaseData.productId].productName;
            console.log("AddNewPurchaseData.productName", AddNewPurchaseData.productName)
    
        firebaseApp.database().ref('purchases').push(AddNewPurchaseData)
            .then((data) => {
                console.log("Purchase Added Successfully")
                dispatch(PurchaseActions.addPurchaseSuccess(data));
                firebaseApp.database().ref('/products/'+AddNewPurchaseData.productId).once('value', snap=> {
                    var stock = {
                        qty: (parseFloat(snap.val().qty) + parseFloat(AddNewPurchaseData.qty))
                    }
                    console.log("stock.qty", stock.qty)
                    firebaseApp.database().ref('/products/'+AddNewPurchaseData.productId).update(stock)
                .then((data)=>{
                   // alert("Stock Updated")
                })
                })  
                    browserHistory.replace('/home/view-purchases');
            })
            .catch((error) => {
                console.log("Error in adding Purchase", error)
                dispatch(PurchaseActions.addPurchaseFailed(error))
            })
    
    })
    }
}

export function ViewPurchases() {
    return (dispatch) => {
        dispatch(PurchaseActions.viewPurchase());
        let ref = firebaseApp.database().ref().child('/purchases');
        ref.once('value', function (snapshot) {
            let PurchaseList = [];
            snapshot.forEach(childSnapshot => {
                PurchaseList.push(childSnapshot.val())
            })
            dispatch(PurchaseActions.viewPurchaseSuccess(PurchaseList))
        })
            .catch((error) => {
                dispatch(PurchaseActions.viewPurchaseFailed(error))
                console.log("error in getting Purchases", error)
            })
    }
}

export function AddNewSale(AddNewSaleData) {
    return (dispatch) => {
        dispatch(SaleActions.addSale());
        firebaseApp.database().ref('/products').orderByKey().equalTo(AddNewSaleData.productId).once('value',snap=>{
            AddNewSaleData.productName = snap.val()[AddNewSaleData.productId].productName;
            
            firebaseApp.database().ref('/stores').orderByKey().equalTo(AddNewSaleData.storeId).once('value',snap=>{
            AddNewSaleData.storeName = snap.val()[AddNewSaleData.storeId].storeName;
        
        firebaseApp.database().ref('/products/'+AddNewSaleData.productId).once('value', snap=> {
                    if(snap.val().qty < AddNewSaleData.qty && snap.val().qty > 0 ){
                        alert("Sorry, Available Quantity is ( " + snap.val().qty + " ) Only");
                    }
                    else if(snap.val().qty == 0){
                        alert("Sorry, ( " + snap.val().productName + " ) is Out of Stock");
                    }
                    else{
            firebaseApp.database().ref('sales').push(AddNewSaleData)
            .then((data) => {
                console.log("Sale Added Successfully")
                dispatch(SaleActions.addSaleSuccess(data));
            })
                    var stock = {
                        qty: (parseFloat(snap.val().qty) - parseFloat(AddNewSaleData.qty))
                    }
                    console.log("stock.qty", stock.qty)
                    firebaseApp.database().ref('/products/'+AddNewSaleData.productId).update(stock)
                .then((data)=>{
                   // alert("Stock Updated")
                })
                browserHistory.replace('/home/view-sales');
                    }
                })

            .catch((error) => {
                console.log("Error in adding Sale", error)
                dispatch(SaleActions.addSaleFailed(error))
            })

        
        })
    
        })
        
            }
}

export function ViewSales() {
    return (dispatch) => {
        dispatch(SaleActions.viewSale());
        let ref = firebaseApp.database().ref().child('/sales');
        ref.once('value', function (snapshot) {
            let SaleList = [];
            snapshot.forEach(childSnapshot => {
                SaleList.push(childSnapshot.val())
                
            })
            dispatch(SaleActions.viewSaleSuccess(SaleList))
        })
            .catch((error) => {
                dispatch(SaleActions.viewSaleFailed(error))
                console.log("error in getting Sales", error)
            })
    }
}

export function ViewStock() {
    return (dispatch) => {
        dispatch(StockActions.viewStock());
        let ref = firebaseApp.database().ref().child('/products');
        ref.once('value', function (snapshot) {
            let stock = [];
            snapshot.forEach(childSnapshot => {
                if(childSnapshot.val().qty > 0){
                stock.push(childSnapshot.val())
                 
                }
            })
           dispatch(StockActions.viewStockSuccess(stock))
        })
            .catch((error) => {
                dispatch(StockActions.viewStockFailed(error))
                console.log("error in getting Stock", error)
            })
    }
}

export function LogOut() {
    return (dispatch) => {
        dispatch(AuthActions.userLogOut())
    firebaseApp.auth().signOut().then(function () {
      console.log("Sign-out successful.")
      browserHistory.replace("/login");
    }).catch(function (error) {
      console.log("Error", error)
    });

    }
}