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
        let multipath = {};
        let storeDetails = {
            storeName: this.state.storeName,
            description: this.state.description,
            storeAddress: this.state.storeAddress,
        }
        console.log(storeDetails)
        DBfirebase.ref.child('/AddedStores').push(storeDetails);
        browserHistory.push('/home/view-stores')

    }
    render() {
        return (
            <div ><center>
                <AddStoreForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

AddStore.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class AddStoreForm extends React.Component {


    render() {
        
        return (
            <div >
              
                <h1>Add New Product</h1>
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Store Name"
                        name="storeName"
                        value={this.props.signUpState.storeName}
                        floatingLabelText="Store Name"
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
                        hintText="Store Address"
                        name="storeAddress"
                        value={this.props.signUpState.storeAddress}
                        floatingLabelText="Store Address"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Add Store" primary={true} secondary={false} /> <br /><br />
                </form>
                
            </div>
        )
    }
}

AddStoreForm.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}

export default AddStore;
