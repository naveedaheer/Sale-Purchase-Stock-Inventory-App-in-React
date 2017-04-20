import * as firebase from 'firebase';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {ViewPurchases} from '../../Store/Actions/MiddleWare'

const style = {
  margin: 20,
  display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: '#E6EE9C'
};

class ViewProducts extends Component {
    constructor(props){
        super();
        this.state = {
            open: false,
        }
        props.loadPurchases();
    }

    handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  componentWillReceiveProps(){
    this.setState({
            open: this.props.snackbarStatus
        })
}
    
    render() {
        return (
            <div >  
                <center>
                     <h1>Purchase Orders</h1>
                    <br /><br />
                </ center>
               {this.props.purchases.map((p, i) => {
                    return(
                      <div>
                        <Paper style={style} zDepth={5} key={i} > 
                        >Name: {p.productName} <br />
                        >Quantity: {p.qty}<br />
                        >Unite Price: {p.unitPrice}<br />
                        >Description: {p.description}<br /> 
                        </Paper>                     
                     </div>
  )
                })  
                }
                <Snackbar
          open={this.state.open}
          message="Stock Added Successfully!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
     console.log("state", state)
    return {
        purchases: state.purchaseReducer.purchases,
        snackbarStatus: state.purchaseReducer.open
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
        loadPurchases: () => {
            dispatch(ViewPurchases())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);

