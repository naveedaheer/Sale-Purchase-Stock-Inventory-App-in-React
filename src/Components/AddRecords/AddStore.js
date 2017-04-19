import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {AddNewStore} from '../../Store/Actions/MiddleWare'

class AddStore extends Component {
    constructor() {
        super();
        this.state = {
            storeName: '',
            description: '',
            storeAddress:''
           
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
        let storeDetails = {
            storeName: this.state.storeName,
            description: this.state.description,
            storeAddress: this.state.storeAddress,
        }
        console.log(storeDetails)
        {this.props.AddStoreRequest(storeDetails)}
    }

    render() {
        return (
            <div ><center>
               <h1>Add New Product</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        hintText="Store Name"
                        name="storeName"
                        value={this.state.storeName}
                        floatingLabelText="Store Name"
                        onChange={this.inputHandler}
                        /><br /><br />
                    
                        <TextField
                        type="text"
                        hintText="Store Address"
                        name="storeAddress"
                        value={this.state.storeAddress}
                        floatingLabelText="Store Address"
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

                 <RaisedButton type="submit" label="Add Store" primary={true} secondary={false} /> <br /><br />
                </form>
            </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        storeReducer: state.storeReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        AddStoreRequest: (data) => {
            dispatch(AddNewStore(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStore);
