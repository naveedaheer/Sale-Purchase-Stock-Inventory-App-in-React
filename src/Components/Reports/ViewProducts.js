import * as firebase from 'firebase';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import {ViewProducts} from '../../Store/Actions/MiddleWare'

const style = {
  margin: 20,
  display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: '#E6EE9C' 
};

class ViewProductsList extends Component {
    constructor(){
        super();
    }

    componentWillMount(){
      {this.props.searchProducts()}
    }
    
    render() {
        return (
            <div >  
                <center>
                     <h1>Products List</h1>
                    <br /><br />

                </ center>
               {this.props.products.map((p, i) => {
                    return(
                      <div>
                        <Paper style={style} zDepth={5} key={i} > 
                        >Name: {p.productName} <br />
                        >Description: {p.description}<br /> 
                        >Company: {p.company}<br />
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
        products: state.productReducer.products,
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        searchProducts: () => {
            dispatch(ViewProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductsList);

