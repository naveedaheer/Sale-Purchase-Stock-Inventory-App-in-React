import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div >
                <h1>Welcome</h1>
                <br /><br /><br /><br />
                <div>
                    <center>
                        {this.props.children}
                    </center>
                </div>
            </div>
        );
    }
}

export default Home;

