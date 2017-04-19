import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import MUI from 'material-ui'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router'
import {LogOut} from '../../Store/Actions/MiddleWare'
import {connect} from 'react-redux'


 const styles ={ 
 appBar : {
   // backgroundColor: '#009688',
    backgroundColor: '#3F51B5',
     minHeight:50,
  },

  drawer: {
    backgroundColor: '#3F51B5',
    color: "green",
    width: 200
  },

  button:{
    width:125
  }
 }

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    openDrawer: false,
  };
this.logOut = this.logOut.bind(this);
}

logOut(){
  this.props.LogOutRequest()
}

  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});

  render() {
    return (
      <div>
      <div >
        <AppBar title="Aheer Inventory" style={styles.appBar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} onLeftIconButtonTouchTap={this.handleToggle} >   
         </ AppBar>
         
          <Drawer 
        // width={200}
       
         openSecondary={false} open={this.state.openDrawer} style={styles.drawer} >
              
              <AppBar title="Dashboard" style={styles.appBar}
              showMenuIconButton={false}
       // iconClassNameRight="muidocs-icon-navigation-expand-more"
        // onTouchTap={this.handleToggle}
          >   
          
        </ AppBar>
 
           
<br />
<img src='../naveedaheer1.jpg' alt="Naveed Aheer" width="260" ></img>
<br /> <br />
<Link to='/home/add-sale' >
           <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Sale"
          primary={false}
          secondary={true}
        /></Link> 
        <Link to='/home/add-sale' ><RaisedButton
        
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Add "
          primary={true}
        /></Link> 
        {"  "}
        <Link to='/home/view-sales' >
        <RaisedButton
        
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="View "
          primary={true}
        /></Link><br /><br />

          <Link to='/home/view-purchases' > <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="purchase"
          secondary={true}
        /> </Link>
        <Link to='/home/add-purchase' ><RaisedButton
        width={150}
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Add "
          primary={true}
        /></Link> 
        {"  "}
        <Link to='/home/view-purchases' >
        <RaisedButton
        
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="View "
          primary={true}
        /></Link><br /><br />
 <Link to='/home/view-stock' >
 <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="stock"
          secondary={true}
        /></Link> <br /><br />
       <Link to='/home/view-products' ><RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="products"
          secondary={true}
        /></Link>

       <Link to='/home/add-product' ><RaisedButton
        width={150}
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Add "
          primary={true}
        /></Link> 
        {"  "}
        <Link to='/home/view-products' >
        <RaisedButton      
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="View "
          primary={true}
        /></Link><br /><br />
 <Link to='/home/add-store' >
<RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Stores"
          secondary={true}
        /></Link>
        <Link to='/home/add-store' ><RaisedButton
        width={150}
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Add "
          primary={true}
        /></Link> 
        {"  "}
        <Link to='/home/view-stores' >
        <RaisedButton    
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="View "
          primary={true}
        /></Link><br /><br />
        </ Drawer>
        <RaisedButton
          //style={styles.button}
          onClick={this.logOut}
          //onTouchTap={this.props.LogOutRequest()}
          label="Logout"
          primary={false}
         // secondary={true}
        /> 
      </div>
    <div>
{this.props.children}
    </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        //storeReducer: state.storeReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        LogOutRequest: () => {
            dispatch(LogOut())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);