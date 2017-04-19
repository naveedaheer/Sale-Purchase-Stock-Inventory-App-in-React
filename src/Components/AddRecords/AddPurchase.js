import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {AddNewPurchase, ViewProducts} from '../../Store/Actions/MiddleWare'

const style = {
    padding: '10px',
    textAlign: 'center'
};

class AddPurchaseOrder extends Component {
    constructor(props) {
        super();
        this.state = {
            productName: '',
            productId: '',
            description: '',
            qty: 0,
            unitPrice: 0,
            storeName: '',
        }
        props.loadProducts();
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
        let productDetails = {
                productId: this.state.productId,
                productName: '',
                description: this.state.description,
                qty: this.state.qty,
                unitPrice: this.state.unitPrice
                            }
              this.props.addPurchaseRequest(productDetails);
              console.log("productDetails", productDetails)
            }

    render() {
        return (
            <div ><center>
                <form onSubmit={this.submit} >
                    <br /> <br /> 
                    <select style={style}
                        required
                        
                        name="productId"
                        ref="selectedProduct"
                        onChange={this.inputHandler}
                        value={this.state.productId}
                    >
                    <option value="Select Product" > Select Product  </option>
                        {
                            this.props.allProducts.map((v, i) => {
                                return (
                                    <option value= {v.key} key={i}> {v.productName} </option>
                                )
                            })}
                    </select>
                    <br />
                    <br />
                      <br />                  

                    <TextField
                        type="number"
                        hintText="qty"
                        name="qty"
                        value={this.state.qty}
                        floatingLabelText="qty"
                        onChange={this.inputHandler}
                    /><br />
                    <br />

                        <TextField
                        type="number"
                        hintText="unitPrice"
                        name="unitPrice"
                        value={this.state.unitPrice}
                        floatingLabelText="unitPrice"
                        onChange={this.inputHandler}
                    /><br />
                    <br />

                      <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.state.description}
                        floatingLabelText="description"
                        onChange={this.inputHandler}
                    /><br /><br />
                    <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>

            </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        allProducts: state.productReducer.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPurchaseRequest: (data) => {
            console.log(data)
            dispatch(AddNewPurchase(data))
        },
        loadProducts: () => {
            dispatch(ViewProducts());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchaseOrder);
