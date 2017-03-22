import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../../Database/DBfirebase'
import { signUp } from '../../Store/Actions/Auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            productName: '',
            description: '',
            company: '',
            MRP: '',
            qty:0
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let productDetails = {
            productName: this.state.productName,
            description: this.state.description,
            company: this.state.company,
            MRP: this.state.MRP
        }

        let stock = {
            productName: this.state.productName,
            qty: this.state.qty
        }
        console.log("productDetails", productDetails)
        console.log("stock", stock)
        DBfirebase.ref.child('/AddedProducts').push(productDetails);
        DBfirebase.ref.child('Stock').push(stock);
        browserHistory.push('/home/view-products')
    }
    render() {
        return (
            <div ><center>
                <AddProductForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

AddProduct.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class AddProductForm extends React.Component {


    render() {
        
        return (
            <div >
              
                <h1>Add New Product</h1>
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Product Name"
                        name="productName"
                        value={this.props.signUpState.productName}
                     floatingLabelText="Product Name"
                        onChange={this.props._inputHandler}
                        /><br /><br />

                    <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.props.signUpState.description}
                       floatingLabelText="description"
                        onChange={this.props._inputHandler}
                        /><br /><br />

                    
                        <TextField
                        type="text"
                        hintText="company"
                        name="company"
                        value={this.props.signUpState.company}
                        floatingLabelText="company"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                        <TextField
                        type="number"
                        hintText="MRP"
                        name="MRP"
                        value={this.props.signUpState.MRP}
                        floatingLabelText="Max Retail Price"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>
                
            </div>
        )
    }
}

AddProductForm.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}

export default AddProduct;
