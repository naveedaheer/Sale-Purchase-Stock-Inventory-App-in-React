import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { ViewStores } from '../../Store/Actions/MiddleWare'

const style = {
    margin: 20,
    display: 'block-inline',
    height: 'auto',
    width: 'auto',
    padding: 20,
    backgroundColor: '#FFD54F'
};

class ViewStoresList extends Component {
    constructor(props) {
        super();
        props.searchStores();
    }

    render() {
        return (
            <div >
                <center>
                    <h1>Stores Added</h1>
                    <br /><br />
                </ center>
                {this.props.stores.map((s, i) => {
                    return (
                        <div>

                            <Paper style={style} zDepth={5} keu={i} >
                                >Name: {s.storeName} <br />
                                >Description: {s.description}<br />
                                >Store Address: {s.storeAddress}<br />
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
    return {
        stores: state.storeReducer.stores
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchStores: () => {
            dispatch(ViewStores())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStoresList);



