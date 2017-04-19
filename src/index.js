import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {firebaseApp} from './Database/firebaseApp'
import store from './Store/Store'
import {AuthActions} from './Store/Actions/AllActions'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './Components/Login/Login';
import Dashboard from "./Components/AdminDashboard/Dashboard"
import AddProduct from './Components/AddRecords/AddProduct'
import ViewProducts from './Components/Reports/ViewProducts'
import AddPurchase from './Components/AddRecords/AddPurchase'
import AddSale from './Components/AddRecords/AddSale'
import AddStore from './Components/AddRecords/AddStore'
import ViewStores from './Components/Reports/ViewStores'
import ViewPurchases from './Components/Reports/ViewPurchases.js'
import ViewSales from './Components/Reports/ViewSales';
import Stock from './Components/Stock/Stock'

injectTapEventPlugin();

ReactDOM.render(
<MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/home" component={Dashboard} >
       
       <Route path="add-product" component={AddProduct} > </Route>
       <Route path="add-purchase" component={AddPurchase} > </Route>
       <Route path="add-sale" component={AddSale} > </Route>
       <Route path="add-store" component={AddStore} > </Route>
       <Route path="view-products" component={ViewProducts} > </Route>
       <Route path="view-purchases" component={ViewPurchases} > </Route>
       <Route path="view-sales" component={ViewSales} > </Route>
       <Route path="view-stores" component={ViewStores} > </Route>
       <Route path="view-stock" component={Stock} > </Route>
       <IndexRoute component={Stock} > </ IndexRoute>
       </Route>

       <Route path="/" component={Login} > </Route>
       <Route path="/login" component={Login} > </Route>
    </Router>
  </ Provider>
</ MuiThemeProvider>
  ,
  document.getElementById('root')
);

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    console.log("user has loggedin or signedup" , user )
    const {email} = user;
    store.dispatch(AuthActions.hasLoggedIn(email));
    browserHistory.replace('/home'); 
  }
  else{
    console.log("user has signed out or not loggedin")
    browserHistory.replace('/login')
  }
})