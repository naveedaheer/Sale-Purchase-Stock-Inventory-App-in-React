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
import AutoComplete from 'material-ui/AutoComplete';
import * as firebase from 'firebase';
import { Search } from '../../Store/Actions/Auth'

 const style = {
            padding: '10px',
            textAlign: 'center'
        };

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            stores: [],
            productName: '',
            description: '',
            company:'',
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.onSearch = this.onSearch.bind(this);
      //  this.handleUpdateInput = this.handleUpdateInput.bind(this);
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
           //  productName: this.refs.productName.value,
            description: this.state.description,
           company: this.state.company,
        }
        console.log(productDetails)
      //  DBfirebase.refAddProduct.push(productDetails);
      //  browserHistory.push('/home/view-purchases')

    }

//working code
     onSearch(e) {
        let _self = this;
       // e.preventDefault()
        let ref = firebase.database().ref().child('/AddedProducts/');
        _self.products = [];
       
      //  console.log(this.refs.selectedCity.value)
        //  ref.orderByChild('city').equalTo(this.refs.selectedCity.value).once('value', function (snapshot) {
  ref.once('value', function (snapshot) {
                
                        

            snapshot.forEach(childSnapshot => {

                _self.products.push(childSnapshot.val())
                console.log("products", _self.products)
                
            })
            _self.props.serachProducts(_self.products)
            _self.setState({
                products: _self.props.storeReducer.products
                
            })
        });
  }

   componentWillMount(){
       this.onSearch();
    }

    handleUpdateInput = (e) => {
    this.setState({
     
      [e.target.name]: e.target.value
      
    });
  };


    render() {
        return (
            <div ><center>
                <AddProductForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

// AddProduct.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }


class AddProductForm extends React.Component {


    render() {
        console.log("this.props.signUpState.products",this.props.signUpState.products)
        const datasource = []

         { this.props.signUpState.products.map((v, i) => {
                                        return (
                                          datasource.push(v.productName)
                                        )
                                    })}

                                    console.log("datasource", datasource)

        return (
            <div >
              
                <h1>Add Purchased Order</h1>
                <form onSubmit={this.props._submit} >


       {/*<select style={style}
                                required
                                ref="store">
                                {
                                    this.props.signUpState.products.map((v, i) => {
                                        return (
                                            <option value={v.productName} key={i}> {v.productName} </option>
                                        )
                                    })}                            
                                    </select>*/}
                            <br />
                            <br />



                    <AutoComplete
          hintText="Product Name"
         // filter={AutoComplete.noFilter}
         // filter={AutoComplete.fuzzyFilter}
          filter={AutoComplete.caseInsensitiveFilter}
          openOnFocus={true}
           name="productName"
           ref="productName"
            value={this.props.signUpState.productName}
            dataSource={datasource}
             floatingLabelText="Product Name"
             hintText="Product Name"
          //   onChange={this.props._inputHandler}
          onUpdateInput={this.props.handleUpdateInput}
     //  onUpdateInput={this.props._inputHandler}
       //   dataSourceConfig={dataSourceConfig}
     
        />
                    <br /><br />

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

const mapStateToProps = (state) => { 
     console.log(state.ProductReducer)
    return {
        storeReducer: state.ProductReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        serachProducts: (data) => {
            console.log(data)
            dispatch(Search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
