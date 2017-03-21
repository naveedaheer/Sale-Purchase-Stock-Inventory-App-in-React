import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store/Store';
import Login from './Components/Login/Login';
import Dashboard from "./Components/AdminDashboard/Dashboard"
import AddProduct from './Components/AddRecords/AddProduct'
import ViewProducts from './Components/Reports/ViewProducts'
import AddPurchase from './Components/AddRecords/AddPurchase'
import AddSale from './Components/AddRecords/AddSale'
import AddStore from './Components/AddRecords/AddStore'
import ViewStores from './Components/Reports/ViewStores'
import ViewPurchases from './Components/Reports/ViewPurchases.js'
import ViewSales from './Components/Reports/ViewSales'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

injectTapEventPlugin();

ReactDOM.render(
(
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
       </Route>

       <Route path="/" component={Login} > </Route>
    </Router>
  </ Provider>
</ MuiThemeProvider>
),
  document.getElementById('root')
);
