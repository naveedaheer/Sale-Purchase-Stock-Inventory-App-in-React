import React, { Component } from 'react'
import { signIn } from '../../Store/Actions/Auth'
import { connect } from 'react-redux'
import { DBfirebase } from '../../Database/DBfirebase'

import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault()
        DBfirebase.customLogin(this.state)
            .then((user) => {
                this.props.signInUser(user)
                localStorage.setItem('currentUser', user.uid);
                this.context.router.push({
                    pathname: '/home',
                    // state: this.props.user
                })
            })
            .catch((error) => alert(error.message))
        console.log(this.props)
    }
    render() {
        return (
            <div >
                <SigninComponent _inputHandler={this.inputHandler} _submit={this.signin} />
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => { 
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (data) => {
            dispatch(signIn(data))
        }
    }
}



class SigninComponent extends React.Component {


    render() {
        return (
            <div >
                <center>
               <h1>Admin Login</h1>
                <form onSubmit={this.props._submit}>
                    <TextField
                        type="email"
                        hintText="Email"
                         name="email"
                         floatingLabelText="Email"
                        onChange={this.props._inputHandler}
                        required
                        /><br />

                    <TextField
                        type="password"
                        hintText="password"
                        name="password"           
                        floatingLabelText="Password"
                        onChange={this.props._inputHandler}
                        required
                        /><br /><br />
                    <RaisedButton type="submit" label="Sign in" primary={true} /><br />                
                </form>
                </center>
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
