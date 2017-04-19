import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import {ViewStock} from '../../Store/Actions/MiddleWare'

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
        props.loadStock();
    }

    ComponentDidMount(){
        // this.props.loadStock();
    }

    render() {
        return (
            <div >  
                <center>
                     <h1>Stock</h1>
                    <br /><br />
        </ center>
               {this.props.allStock.map((p, i) => {
                    return(
                      <div >
                        <Paper style={style} zDepth={5} key={i} > 
                        >Name: {p.productName} <br />
                        >Quantity: {p.qty}<br />
                        </Paper>                     
                     </div>
  )
                })
                  
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => { 
     console.log("state", state)
    return {
        allStock: state.stockReducer.stock
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
        loadStock: () => {
            dispatch(ViewStock())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
