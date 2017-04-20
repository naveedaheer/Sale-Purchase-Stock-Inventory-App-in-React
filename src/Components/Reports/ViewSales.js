import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {ViewSales} from '../../Store/Actions/MiddleWare'

const style = {
  margin: 20,
  display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: '#9CCC65'
};

class ViewProducts extends Component {
    constructor(props){
        super();
        this.state = {
            open: false,
        }
        props.loadSales();
    }

        handleRequestClose = () => {
    this.setState({
      open: false
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
                     <h1>Sale Orders</h1>
                    <br /><br />
</ center>
               {this.props.allSales.map((p, i) => {
                    return(
                      <div key={i}>
                        <Paper style={style} zDepth={5} > 
                        >Name: {p.productName} <br />
                        >Store: {p.storeName}<br />
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
          message="Stock Subtracted Successfully!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
     console.log(state.saleReducer.sales)
    return {
        allSales: state.saleReducer.sales,
        snackbarStatus: state.saleReducer.open
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
        loadSales: () => {
            dispatch(ViewSales())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);

