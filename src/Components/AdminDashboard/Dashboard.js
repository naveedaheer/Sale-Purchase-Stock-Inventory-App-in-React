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
    width:125
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
      <div>
      <div >
        <AppBar title="Aheer Inventory" style={styles.appBar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} docked={true} onLeftIconButtonTouchTap={this.handleToggle} >    </ AppBar>
         
          <Drawer 
        // width={200}
       
         openSecondary={false} open={this.state.openDrawer} style={styles.drawer} >
              
              <AppBar title="Dashboard" style={styles.appBar}
              showMenuIconButton={false}
       // iconClassNameRight="muidocs-icon-navigation-expand-more"
        // onTouchTap={this.handleToggle}
          >   </ AppBar>
         
           
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

 <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="stock"
          secondary={true}
        /><br /><br />
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
{/*
        <RaisedButton
        fullWidth
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Users"
          secondary={true}
        />
        <Link to='/home/add-users' ><RaisedButton
        width={150}
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="Add "
          primary={true}
        /></Link> 
        {"  "}
        <Link to='/home/view-users' >
        <RaisedButton
        
          style={styles.button}
          onTouchTap={this.handleTouchTap}
          label="View "
          primary={true}
        /></Link><br /><br />*/}


        </ Drawer>
 


      </div>
    <div>
{this.props.children}
    </div>
    </div>
    );
  }
}