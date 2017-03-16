import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import MUI from 'material-ui'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router'


 const styles ={ 
 appBar : {
   // backgroundColor: '#009688',
    backgroundColor: '#3F51B5',
     minHeight:50,
     // height:300
  },

  drawer: {
    backgroundColor: '#3F51B5',
    color: "green",
    width: 200
  },

  button:{
   // width:260
  }
 }

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    openDrawer: false,
   
  };

  }

  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});

  render() {
    return (
      <div >
        <AppBar title="Aheer Inventory" style={styles.appBar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} >   
         
          <Drawer 
        // width={200}
       
         openSecondary={false} open={this.state.openDrawer} style={styles.drawer} >
              
              <AppBar title="Dashboard" style={styles.appBar}
       // iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} >   </ AppBar>
           <br /><br />

{/*<img src="http://www.wendia.com/wp-content/uploads/2015/07/purchase-guy.png" alt="inventory" width="200" />
<br /><br />*/}

<img src="https://lh3.googleusercontent.com/-TVaFJmmKdA4/VxvHPpFm6EI/AAAAAAAAAHo/csiGYilpa0k5vLs6YkhB5LmHo9_k_3vZACL0B/w692-h389-n-no/naveedaheer1.jpg" alt="inventory" width="260" />
<br /><br />

           <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Sale"
          primary={true}
        /><br /><br /><br />

          <Link to='/home/add-purchase' > <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="purchase"
          primary={true}
        /> </Link> <br /><br /><br />

 <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="stock"
          primary={true}
        /><br /><br /><br />

<Link to='/home/add-product' ><RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Products"
          primary={true}
        /></Link><br /><br /><br />

<RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Stores"
          primary={true}
        /><br /><br /><br />

        <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Users"
          primary={true}
        /><br /><br /><br />


        </Drawer>
 
            </ AppBar>

{this.props.children}

      </div>
    );
  }
}