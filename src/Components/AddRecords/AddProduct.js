import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import {firebaseApp} from '../../Database/firebaseApp'
import { AddNewProduct } from '../../Store/Actions/MiddleWare'
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
            qty:0
        }

        let stock = {
            productName: this.state.productName,
            qty: this.state.qty
        }
        {this.props.AddProductRequest(productDetails)}
        console.log("productDetails", productDetails)
    }

    render() {
        return (
            <div ><center>
                            <h1>Add New Product</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        hintText="Product Name"
                        name="productName"
                        value={this.state.productName}
                     floatingLabelText="Product Name"
                        onChange={this.inputHandler}
                        /><br /><br />

                    <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.state.description}
                       floatingLabelText="description"
                        onChange={this.inputHandler}
                        /><br /><br />

                    
                        <TextField
                        type="text"
                        hintText="company"
                        name="company"
                        value={this.state.company}
                        floatingLabelText="company"
                        onChange={this.inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>
                
                            </center>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        productReducer: state.productReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddProductRequest: (data) => {
            dispatch(AddNewProduct(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
